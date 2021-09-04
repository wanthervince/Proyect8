import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleado',
  templateUrl: './count-empleado.component.html',
  styleUrls: ['./count-empleado.component.css'],
})
export class CountEmpleadoComponent implements OnInit {
  rbtnSelect = 'ALL';
  @Input() all: number;
  @Input() man: number;
  @Input() women: number;

  @Output() countEmpleado: EventEmitter<string> = new EventEmitter();

  RadioChange(): void {
    this.countEmpleado.emit(this.rbtnSelect);
  }
  constructor() {
    this.all = 0;
    this.man = 0;
    this.women = 0;
  }

  ngOnInit(): void {}
}
