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
  listItem = [];

  initClick() {
    if (this.name !== '') {
      this.inputErrorStatus = false;
      this.listItem.push({id: this.id, name: this.name});
      this.id++;
      this.name = '';
    } else {
      this.inputErrorStatus = true;
    }
  }

  removeItem(data) {
    this.listItem = this.listItem.filter(item => item.id !== data);
  }
}
