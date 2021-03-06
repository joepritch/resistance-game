import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthenticationService } from '../authentication.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  // is own message boolean

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
      this.messageContent = chatMessage.message;
      this.timeStamp = chatMessage.timeSent;
      this.userName = chatMessage.userName;
  }
}
