import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  
 constructor(private playerservice:PlayerService) { }

  ngOnInit() {

  }

}
