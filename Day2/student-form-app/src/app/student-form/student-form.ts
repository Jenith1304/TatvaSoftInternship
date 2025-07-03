import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {
  studentList: any[] = [];
  submitted = false;

  addStudent(form: NgForm) {
    if (form.valid) {
      this.studentList.push(form.value);
      this.submitted = true;
      form.resetForm(); // Reset after submit
    }
  }
}
