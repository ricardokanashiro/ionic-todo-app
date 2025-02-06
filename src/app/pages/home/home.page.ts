import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicComponentsModule } from 'src/ionic-components.module'
import { TodoListComponent } from '../../components/todo-list/todo-list.component'
import { TodoListService } from '../../services/todoListService/todo-list.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicComponentsModule, TodoListComponent]
})
export class HomePage implements OnInit {

  todoTitleText: string = ""

  constructor(private todoListService: TodoListService, private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  handleCreateTodo() {

    if(this.todoTitleText === "" || this.todoTitleText.trim() === "") {

      this.alertCtrl.create({
        header: "Titulo Inválido!",
        message: "O título que você colocou é inválido",
        buttons: [{ text: "Ok" }]
      }).then(alertEl => alertEl.present())

      return
    }

    this.todoListService.addTodo(this.todoTitleText)
    this.todoTitleText = ""
  }

  handleDeleteAllTodos() {
    this.todoListService.deleteAllTodos()
  }
}
