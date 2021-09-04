import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado: Empleado[] = [
    { nro: 1, name: 'JUAN', lastname: 'PEREZ', sex: 'MAN', salary: 2500 },
    {
      nro: 2,
      name: 'TRIANA',
      lastname: 'PAREDES',
      sex: 'WOMAN',
      salary: 3500,
    },
    { nro: 3, name: 'YULISA', lastname: 'JOSECT', sex: 'WOMAN', salary: 3000 },
    { nro: 4, name: 'WANTHERLEY', lastname: 'SILVA', sex: 'MAN', salary: 2000 },
    { nro: 5, name: 'JOSE', lastname: 'SILVA', sex: 'MAN', salary: 5500 },
    {
      nro: 6,
      name: 'ALEXANDRA',
      lastname: 'PAUCCAR',
      sex: 'WOMAN',
      salary: 2000,
    },
  ];
  rbtnSelect = 'ALL';
  constructor() {}

  ngOnInit(): void {}
  countAllEmpleado(): number {
    return this.listEmpleado.length;
  }
  countManEmpleado(): number {
    return this.listEmpleado.filter((list) => list.sex === 'MAN').length;
  }
  countWomanEmpleado(): number {
    return this.listEmpleado.filter((list) => list.sex === 'WOMAN').length;
  }
  countEmpleado(rbtnSelected: string): void {
    this.rbtnSelect = rbtnSelected;
  }
}
