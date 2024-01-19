import { Component } from '@angular/core';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent {
  title: string = "Line-Item-List";
  lineItems: LineItem[] = [];

  constructor(
    private liSvc: LineItemService
  ) { }
  
  ngOnInit(): void {
    console.log("In line-item list component.");
    this.liSvc.list().subscribe({
      next: (resp) => {
        console.log(resp);
        this.lineItems = resp;
        console.log("LineItems list:");
        for (let li of this.lineItems) {
          console.log(li);
        }
      }
    });
  }
}
