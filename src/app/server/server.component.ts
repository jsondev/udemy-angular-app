import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created";
  serverName = "Test Server";



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name is "  
    + this.serverName;
  }
  onUpdateServerName(event:any){
    this.serverName = <HTMLInputElement>event.target.value;
  }

}
