import { Component, OnInit } from '@angular/core';
import { IonicComponentsModule } from 'src/ionic-components.module';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoListService } from '../../services/todoListService/todo-list.service';
import { Todo } from 'src/models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [IonicComponentsModule, TodoCardComponent, CommonModule]
})
export class TodoListComponent  implements OnInit {

  todos: Todo[] | undefined

  constructor(private TodoListService: TodoListService) {
  }
  ngOnInit() {
    this.TodoListService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }
}
