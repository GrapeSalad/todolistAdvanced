import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div>
        <div *ngIf="childSelectedTask">
          <h3>{{selectedTask.description}}</h3>
          <p>Task Complete? {{selectedTask.done}}</p>
          <hr>
          <h3>Edit Task</h3>
          <label>Enter Task Description:</label>
          <input [(ngModel)]="selectedTask.description">
          <label>Enter Task Priority (1-3):</label><br>
          <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
