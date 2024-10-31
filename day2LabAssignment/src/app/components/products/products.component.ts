import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproduct[];
  categories: Icategory[];
  selectedCatId: number = 0;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Dell Laptop',
        price: 1200,
        quantity: 2,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 1
      },
      {
        id: 2,
        name: 'Hp Laptop',
        price: 800,
        quantity: 0,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 1
      },
      {
        id: 3,
        name: 'Iphone',
        price: 150,
        quantity: 0,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 2
      },
      {
        id: 4,
        name: 'OPPO',
        price: 250,
        quantity: 1,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 2
      },
      {
        id: 5,
        name: 'Samsung Tablet',
        price: 500,
        quantity: 12,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 3
      },
      {
        id: 6,
        name: 'Od Tablet',
        price: 650,
        quantity: 7,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 3
      }
    ];
    this.categories = [
      {
        name: "Laptop",
        id: 1
      },
      {
        name: "Phone",
        id: 2
      },
      {
        name: "Tablet",
        id: 3
      }
    ]
  }

  trackItem(index: number, item: Iproduct) {
    return item.id;
  }
  decreaseProducts(item: Iproduct) {
    item.quantity--;
  }
}
