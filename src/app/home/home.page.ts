import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicComponentsModule } from 'src/ionic-components.module'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicComponentsModule]
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
