import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  list: Array<number> = new Array(7);

  constructor(
    route: ActivatedRoute,
    private studentService: StudentService,
    private http: HttpClient
  ) {
    route.params.subscribe((params: any) => {
      studentService.Foo(params['id']);
    });
  }

  downloadStudentCV() {
    const cvUrl = 'https://ik.imagekit.io/m1dw7xcao/50edc67b-edc0-49de-97b2-17a44d951ad1';

    this.http.get(cvUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = 'student_cv.pdf';
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  }
}
