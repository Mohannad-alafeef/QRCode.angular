import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  list: Array<number> = new Array(7);

  student: any = {};
  certifications: any[] = [];
  constructor(
    route: ActivatedRoute,
    private studentService: StudentService,
    private http: HttpClient
  ) {
    route.params.subscribe((params: any) => {
      console.log(params['id']);

      studentService.getStudent(params['id']).then((v) => (this.student = v));
      studentService
        .getStudentCertifications(params['id'])
        .then((v) => (this.certifications = v));
    });
  }

  downloadPdf(pdfUrl: string) {
    this.http.get(pdfUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = `${this.student.firstName}_${this.student.lastName}.pdf`;
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  }
  getAge(dob: string) {
    let timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
