import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearch(){
    this.search.emit(this.searchTerm);
  }
}
