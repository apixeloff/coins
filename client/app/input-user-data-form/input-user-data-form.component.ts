import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, flatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.scss']
})
export class InputUserDataFormComponent {

  allCurrency: CurrencyOption = {
    display: 'Select coin denominations',
    completed: false,
    color: 'primary',
    subcurrencies: [
      {display: 'Silver dollars', name: 'dollars', completed: true, color: 'primary'},
      {display: 'Fifty cent pieces', name: 'fifties', completed: true, color: 'primary'},
      {display: 'Quarters', name: 'quarters', completed: true, color: 'primary'},
      {display: 'Dimes', name: 'dimes', completed: true, color: 'primary'},
      {display: 'Nickles', name: 'nickles', completed: true, color: 'primary'},
      {display: 'Pennies', name: 'pennies', completed: true, color: 'warn'}
    ],
   
  };

  allComplete: boolean = false;

  currencyFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  coinRequest: CoinsRequest = new CoinsRequest();
  coinResults: CoinsResults = new CoinsResults();

  constructor(private http: HttpClient) {}

  updateAllComplete(subtask) {
    this.allComplete = this.allCurrency.subcurrencies != null && this.allCurrency.subcurrencies.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.allCurrency.subcurrencies == null) {
      return false;
    }
    return this.allCurrency.subcurrencies.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.allCurrency.subcurrencies == null) {
      return;
    }
    this.allCurrency.subcurrencies.forEach(t => t.completed = !!completed);
  }

  onSubmit() {
    this.coinRequest.amount = this.currencyFormControl.value * 1;
    this.allCurrency.subcurrencies.map(t => {
      this.coinRequest.currency[t.name] = t.completed;
    });
    this.http.post(environment.endpoint + '/coins', this.coinRequest).subscribe(results => {
      console.log('results',results);
      this.coinResults = results as CoinsResults;
    })
  }

}



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class CoinsResults {
  dollars: number = 0;
  fifties: number = 0;
  quarters: number = 0;
  dimes: number = 0;
  nickles: number = 0;
  pennies: number = 0;
}

export class CoinsRequest {
  currency: SelectedCurrency = new SelectedCurrency();
  amount: number;
}

export class SelectedCurrency {
  dollars: boolean = false;
  fifties: boolean = false;
  quarters: boolean = false;
  dimes: boolean = false;
  nickles: boolean = false;
  pennies: boolean = true;
}

export interface CurrencyOption {
  display: string;
  completed: boolean;
  color: ThemePalette;
  subcurrencies?: CurrencyOption[];
  name?: string;
}