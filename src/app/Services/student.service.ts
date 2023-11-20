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
        .get('http://192.168.233.98:5001/api/UserAccount/user/' + 4)
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
        .get('http://192.168.233.98:5001/api/UserAccount/UserCourses/' + 4)
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
