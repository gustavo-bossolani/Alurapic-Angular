import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {


  // Criando um listener de um evento custom
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();


  constructor() { }

  ngOnInit() {
    // Filtro
    this.debounce
      .pipe(debounceTime(300))
      // Emitindo o valor deste evento custom
      .subscribe(filter => this.onTyping.emit(filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
