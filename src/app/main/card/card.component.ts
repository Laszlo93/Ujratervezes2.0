import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imgUrl: string = "https://images.unsplash.com/photo-1642816169320-3c70968f53bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
  public altText: string = "Nature";
  public buttonText: string = "Change Image";
  
  constructor() { }

  ngOnInit(): void {
  }

  public logSomething(): void {
    console.log("Click happend.");
  }

}
