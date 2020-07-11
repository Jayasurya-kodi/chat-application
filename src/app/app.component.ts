import { Component, ViewChild, ElementRef, ViewChildren, QueryList, OnInit } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  @ViewChildren('msg') itemElements: QueryList<any>;

  private scrollContainer: any;

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());
  }

  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  title = 'QUICK CH@T';
  subtitle = 'We welcome you to the world of cr@ziness !!';
  public name: String = "";
  public arr = [];
  public value;
  public date;
  s: string = "";
  j: number = 0;
  message(str: String) {
    this.arr.push(str);
  }
  tochild(nam: String) {
    if (nam.trim() != "") {
      this.s = "";
      this.date = new Date();
      if (this.date.getMinutes() < 10 && this.date.getHours()<10) {
        this.s="0"+this.date.getHours();
        this.s += ":0" + this.date.getMinutes();
        this.j = -6;
      }
      else if(this.date.getHours()>=10 && this.date.getMinutes()<10){
        this.s += ":0" + this.date.getMinutes();
        this.j = -6;
      }
      else if(this.date.getHours()<10 && this.date.getMinutes()>=10){
        this.s="0"+this.date.getHours()+":"+ this.date.getMinutes();
        this.j=-6;
      }
      else {
        this.s =this.date.getHours() +":" + this.date.getMinutes();
        this.j = -6;
      }
      this.name = nam+this.s;
      this.arr.push(nam + this.s + "@");
      this.value = "";
    }
  }
  sent(v: any) {
    if (v.target.value.trim() != "") {
      this.s = "";
      this.date = new Date();
      
      if (this.date.getMinutes() < 10 && this.date.getHours()<10) {
        this.s="0"+this.date.getHours();
        this.s += ":0" + this.date.getMinutes();
        this.j = -6;
      }
      else if(this.date.getHours()>=10 && this.date.getMinutes()<10){
        this.s += ":0" + this.date.getMinutes();
        this.j = -6;
      }
      else if(this.date.getHours()<10 && this.date.getMinutes()>=10){
        this.s="0"+this.date.getHours()+":"+ this.date.getMinutes();
        this.j=-6;
      }
      else {
        this.s =this.date.getHours() +":" + this.date.getMinutes();
        this.j = -6;
      }
      this.name = v.target.value+this.s;
      this.arr.push(v.target.value + this.s + "@");
      this.value = "";
    }
  }

refresh() {
  this.arr = [];
  this.ngOnInit();
}
}