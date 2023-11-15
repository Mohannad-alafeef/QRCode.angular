import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  list: Array<number> = new Array(7);
  constructor(route: ActivatedRoute, private studentService: StudentService) {
    route.params.subscribe((params: any) => {
      studentService.Foo(params['id']);
    });
  }
}
