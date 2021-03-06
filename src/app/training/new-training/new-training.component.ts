import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises : Exercise[] = [];

  constructor(
    private _trainingService : TrainingService
  ) { }

  ngOnInit() {
    this.exercises = this._trainingService.getAvailableExercises();
  }

  onStartTraining(f : NgForm) {
    this._trainingService.startExercise(f.value.exercise);
  }
}
