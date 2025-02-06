import { Injectable } from '@angular/core'
import { Todo } from 'src/models/todo'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todosSubject = new BehaviorSubject<Todo[]>([])
  todos = this.todosSubject.asObservable()
  static idCount: number = 1

  constructor() {}

  getTodos() {
    return this.todos
  }

  addTodo(title: string) {

    const newTodo = {
      title,
      id: String(TodoListService.idCount),
      done: false
    }

    const currentTodos = this.todosSubject.getValue()
    this.todosSubject.next([...currentTodos, newTodo])
    TodoListService.idCount += 1
  }

  deleteTodo(id: string) {
    const updatedTodos = this.todosSubject.getValue().filter(todo => todo.id !== id)
    this.todosSubject.next(updatedTodos)
  }

  checkTodo(id: string) {

    const updatedTodos = this.todosSubject.getValue().map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )

    this.todosSubject.next(updatedTodos)
  }

  deleteAllTodos() {
    this.todosSubject.next([])
  }
}
