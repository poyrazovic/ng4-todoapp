import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  inputErrorStatus = false;
  name = '';
  id = 1;
  items = [];

  addItem() {
    if (this.name !== '') {
      this.inputErrorStatus = false;
      this.id++;
      this.items.push({id: `${this.id}`, name: `${this.name}`});
      this.name = '';
    } else {
      this.inputErrorStatus = true;
    }
  }

  removeItem(data) {
    this.items = this.items.filter(item => item.id !== data);
  }
}
