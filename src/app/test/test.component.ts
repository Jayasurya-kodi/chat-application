import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  @ViewChildren('msg') itemElements: QueryList<any>;

  private scrollContainer: any;
  date: Date;

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
  @Input() public set child(pd: any) {
    this.array.push(pd);
  }

  @Output() public cd = new EventEmitter();
  public msg;
  public array = [];
  public value = ""
  constructor() {

  }

  ngOnInit(): void {

  }
  s:string = "";
 j: number=0;
  send(val: any) {
    if (val.target.value.trim() != "") {
      this.s="";
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
      this.array.push(val.target.value+this.s + "@");
      this.cd.emit(val.target.value+this.s);
      this.value = "";
    }
  }
  fireevent(mess: String) {

    if (mess.trim() != "") {
        this.s="";
        this.date=new Date();
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
      this.array.push(mess+this.s + "@");
      this.cd.emit(mess+this.s);
      this.value = "";
    }


  }
  refresh() {
    this.array = [];
    this.ngOnInit();
  }

}
