import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getStudent = async (id: any) => {
    return await new Promise((res, rej) => {
      this.http
        .get('https://localhost:7181/api/UserAccount/user/' + id)
        .subscribe({
          next: (resp: any) => {
            console.log(resp);

            res(resp);
          },
          error: (err) => {
            rej(err);
          },
        });
    });
  };
  getStudentCertifications = async (id: any) => {
    return await new Promise<any[]>((res, rej) => {
      this.http
        .get('https://localhost:7181/api/UserAccount/UserCourses/' + id)
        .subscribe({
          next: (resp: any) => {
            console.log(resp);

            res(resp);
          },
          error: (err) => {
            rej(err);
          },
        });
    });
  };
}
