import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
    Mark: number=0;

    students: any[] = [
      { name: 'Alia', email: 'alia@gmail.com', Mark: 55 },
      { name: 'Sara', email: 'sara@gmail.com', Mark: 30 },
      { name: 'Hala', email: 'hala@gmail.com', Mark: 70 },
      { name: 'Joory', email: 'joory@gmail.com', Mark: 10 },
      // Add more students if needed
    ];
  getMarkColor(Mark: number): string{
    return Mark < 50 ? 'red-text' : 'green-text';
  }

  getPassFailStatus(Mark: number): string {
    return Mark > 50 ? 'PASS' : 'FAIL';
      
    }

    alternateRowStyle(index: number): any {
      return index % 2 === 0 ? { 'background-color': 'white' } : { 'background-color': '#F8F9F9' };
    }
}
