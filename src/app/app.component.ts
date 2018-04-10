import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  inputErrorStatus = false;
  name = '';
  id: number = 1;
  items = [];

  addItem() {
    if (this.name !== '') {
      this.inputErrorStatus = false;
      let todo = this.getTodoItem();
      if(todo.length == 0) {
        this.id = 1;
      } else {
        let maxId = Number(todo[todo.length - 1].id);
        this.id = maxId + 1;
      }
      this.items.push({id: `${this.id}`, name: `${this.name}`});
      this.name = '';
      this.setItem();
      this.getTodoItem();
      this.id++;
    } else {
      this.inputErrorStatus = true;
    }
  }

  removeItem(data) {
    this.items = JSON.parse(localStorage.getItem('todos')).filter(item => item.id !== data);
    this.setItem();
  }

  getTodoItem() {
    if (localStorage.getItem('todos') == null || localStorage.getItem('todos') == '') {
      localStorage.todos = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('todos'));
      return JSON.parse(localStorage.getItem('todos'));
    }
  }

  setItem() {
    localStorage.setItem('todos', JSON.stringify(this.items));
  }

  ngOnInit() {
    this.getTodoItem();
  }
}
