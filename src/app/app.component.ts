import { Component } from '@angular/core';

const geterateTableColumns = () => {
  const defaultCols: Record<string, any>[] = [];

  for (let i = 0; i < 20; i++) {
    defaultCols.push({
      id: crypto.randomUUID(),
      name: `Person ${i + 1}`,
      age: Math.floor(Math.random() * 30) + 20, // Random age between 20 and 50
      gender: i % 2 === 0 ? 'Male' : 'Female', // Alternating gender
    });
  }

  return defaultCols;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DTable';
  data: Record<string, any>[] = geterateTableColumns();
}
