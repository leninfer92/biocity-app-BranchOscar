import { Component, OnInit } from '@angular/core';
import { CombustibleService } from 'src/app/services/Combustible.service';

@Component({
  selector: 'app-validar-combustible',
  templateUrl: './validar-combustible.component.html',
  styleUrls: ['./validar-combustible.component.css']
})
export class ValidarCombustibleComponent implements OnInit {
  combustibleList!: any[];
  updateCombustible!: any;

  constructor(private combustibleService: CombustibleService) {
    this.combustibleList = [];
    this.updateCombustible = {
      id: 0,
      fecha_hora: '',
      numero: '',
      placa: '',
      kilometraje: '',
      ticket: '',
      tipo_combustible: '',
      galones: '',
      subtotal: ''
    };
  }

  ngOnInit(): void {
    this.allOrders();
  }

  showModal(data: any): void {
    this.updateCombustible = { ...data };
    this.updateCombustible['created_at'] = this.updateCombustible['created_at'].split(" ")[0]
  }

  setModal(): void {
    this.updateCombustible = {
      id: null,
      fecha_hora: '',
      numero: '',
      placa: '',
      kilometraje: '',
      ticket: '',
      tipo_combustible: '',
      galones: '',
      subtotal: ''
    };
  }

  allOrders(): void {
    this.combustibleService.getAllOrders().subscribe({
      next: (data: any) => {
        this.combustibleList = data.data;
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  validate(): void {
    this.combustibleService.validateOrder(this.updateCombustible.id,
      this.updateCombustible.galon,
      this.updateCombustible.tipo_combustible,
      this.updateCombustible.ticket).subscribe({
      next: (data: any) => {
        this.allOrders();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  deleteOrder(id: number): void {
    this.combustibleService.deleteOrderById(id).subscribe({
      next: (data: any) => {
        this.allOrders();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }
}
