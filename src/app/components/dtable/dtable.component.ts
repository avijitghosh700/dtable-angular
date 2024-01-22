import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

const defaultCols: Record<string, any>[] = [
  {
    id: crypto.randomUUID(),
    name: 'John Doe',
    age: 30,
    gender: 'Male',
  },
  {
    id: crypto.randomUUID(),
    name: 'Jane Doe',
    age: 25,
    gender: 'Female',
  },
  {
    id: crypto.randomUUID(),
    name: 'Bob Smith',
    age: 40,
    gender: 'Male',
  },
];

@Component({
  selector: 'dtable',
  standalone: true,
  imports: [NgTemplateOutlet, KeyValuePipe],
  templateUrl: './dtable.component.html',
  styleUrl: './dtable.component.scss',
})
export class DtableComponent {
  @Input()
  headerComponent!: TemplateRef<HTMLTableRowElement>;

  @Input()
  bodyComponent!: TemplateRef<{ $implicit: Record<string, any>[] }>;

  @Input() data: Record<string, any>[] = defaultCols;
}
