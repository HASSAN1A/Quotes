
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Silence is the sleep that nourishes wisdom.", 'WARREN G. BENNIS', new Date(2017, 5, 4)),
    new Quote(2, "Gamble everything for love, if you're a true human being.", 'MICHAEL JORDAN', new Date(2011, 1, 19)),
    new Quote(3, "Take away love and our earth is a tomb.", 'NAPOLEON BONAPARTE', new Date(2015, 3, 9)),
    new Quote(4, "Courage is like love; it must have hope for nourishment.", 'HASSAN JUMA', new Date(201, 5, 10)),
  ];

  toggleDescription(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  removeQuote(ToDelete, index) {
    if (ToDelete) {
      let choice = confirm(`Are you sure to delete the quote ${this.quotes[index].name}`)
      if (choice) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}