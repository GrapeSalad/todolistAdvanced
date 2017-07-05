import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
    <hr>
    <edit-task [childSelectedTask] = "masterSelectedTask" (doneButtonClickedSender) = "finishedEditting()"></edit-task>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Do stuff', 1)
  ];

  masterSelectedTask: Task = null;

  editTask(clickedTask) {
    this.masterSelectedTask = clickedTask;
  }

  finishedEditting(){
    this.masterSelectedTask = null;
  }
}
