import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, throwError } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  storageKeyRate = 'rate'
  storageKeyMarketPrice = 'marketPrice'
  constructor(private http: HttpClient) { }

  private _rate$ = new BehaviorSubject('')
  public rate$ = this._rate$.asObservable()

  private _marketPrice$ = new BehaviorSubject(null)
  public marketPrice$ = this._marketPrice$.asObservable()


  public getRate(coins) {
    // let res = this._loadFromLocalStorage(this.storageKeyRate)
    // if (!res) {
    return this.http.get<{ value: number }>(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`)
    //   this._saveToLocalStorage(this.storageKeyRate, res)
    // }
    // this._rate$.next(res)
    // console.log(res);
    // return res
  }

  public async getMarketPrice() {
    let mayData = this._loadFromLocalStorage(this.storageKeyMarketPrice)
    if (!mayData) {
      const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true')
      mayData = res.data.values.map(value => {
        console.log(new Date(value.x));
        console.log(value.x);

        return [new Date(+('161' + value.x)), value.y]
      })
      this._saveToLocalStorage(this.storageKeyMarketPrice, mayData)
    }
    this._marketPrice$.next(mayData)
    return mayData
  }

  private _saveToLocalStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  private _loadFromLocalStorage(key, defaultValue = null) {
    var value = localStorage[key];
    if (!value) return defaultValue
    else return JSON.parse(value);
  }
}
