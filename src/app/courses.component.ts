import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow/>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <button (click)="mouseClickMe()">{{ buttonText }}</button>
        `,
    providers: [CourseService]
})

export class CoursesComponent {
    title = "The title of courses page.";
    buttonText = "Click me";
    times = 0;
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    mouseClickMe() {
        this.times++;
        this.buttonText = "Click me " + this.times;
    }
}