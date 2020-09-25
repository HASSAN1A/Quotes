import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote: Quote;

  @Output() ToDelete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.ToDelete.emit(complete);
  }

  addUpVote() {
    this.quote.upVote++;
  }

  addDownVote() {
    this.quote.downVote++;
  }

  constructor() { }

  ngOnInit() {
  }

}
