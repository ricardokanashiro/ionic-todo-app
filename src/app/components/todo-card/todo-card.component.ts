import { Component, Input, OnInit } from '@angular/core';
import { IonicComponentsModule } from 'src/ionic-components.module';
import { Todo } from 'src/models/todo';

import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'
import { TodoListService } from 'src/app/services/todoListService/todo-list.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  imports: [IonicComponentsModule]
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo | undefined

  constructor(private todoListService: TodoListService) {}
  
  ngOnInit() {
    addIcons({ trash })
  }

  handleCheckTodo(id: any) {
    this.todoListService.checkTodo(id)
  }

  handleDeleteTodo(id: any) {
    this.todoListService.deleteTodo(id)
  }
}
