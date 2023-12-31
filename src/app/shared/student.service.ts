import { Student } from "./student.module";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import{HttpClient} from '@angular/common/http'


@Injectable({
    providedIn: "root",
})

export class StudentService{
constructor(private http:HttpClient){}


getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/students');
}

getStudentById(id:number): Observable <Student>{
    return this.http.get<Student> ('http://localhost:8080/students/' +id);
}
deleteStudentById(id:number): Observable<Student>{
    return this.http.delete('http://localhost:8080/students/' +id);
}

createStudent(student:Student): Observable<Student>{
    return this.http.post<Student>('http://localhost:8080/students',student);
}

updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>('http://localhost:8080/students', student);

}
}