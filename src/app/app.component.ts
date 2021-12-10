import { Component, OnInit } from '@angular/core';
import { Coin } from './model/coin';
import { PriceService } from './price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-price-crypto';
  coins: Coin[] = [];
  coinsFiltered: Coin[] = [];
  searchText = '';

  constructor(private priceService: PriceService) {}

  ngOnInit() {
    this.priceService.getAllPrice().subscribe((res) => {
      this.coins = res;
      this.coinsFiltered = res;
    });
  }

  searchCoin() {
    this.coinsFiltered = this.coins.filter((coin) =>
      coin.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log(this.searchText);
  }
}
