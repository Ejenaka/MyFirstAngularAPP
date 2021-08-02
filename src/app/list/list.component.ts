import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from 'src/core/models/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  items: Item[] = [];

  //@ViewChild() input: ElementRef;

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  setItemDone(item: Item) {
    const foundItem = this.items.find(i => i == item);
    foundItem!.isDone = true;
    console.log(foundItem!.content); 
  }

  clearInput(input: HTMLInputElement) {
    console.log('fun');
    input.value = '';
  }
}
