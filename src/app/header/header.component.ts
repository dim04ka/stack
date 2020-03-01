import {Component, Input, OnInit} from '@angular/core';
import {QuestSearch} from "../question.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = '';
  showMobileMenu = false;
  showSearchBlock = false;
  showSearchBlockHint = false;

  constructor(private searchInput: QuestSearch) { }

  ngOnInit(): void {
  }

  mobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.showSearchBlock = false;
  }

  searchBlock() {
    this.showSearchBlock = !this.showSearchBlock;
    this.showMobileMenu = false;
    this.showSearchBlockHint = true;
  }

  searchFormFocus() {
    this.showSearchBlockHint = true;
  }

  searchFormBlur() {
    this.showSearchBlockHint = false;
  }

  searchUpdate() {
    this.searchInput.setSearch(this.search)
    if (this.showSearchBlockHint) {
      this.searchFormBlur()
    }
  }
}
