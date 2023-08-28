import { Component } from '@angular/core';

interface Participant {
  name: string;
  selectedCard: number | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-planing-poker-app';

  participants: Participant[] = [];

  cards: number[] = [0, 1, 2, 3, 5, 8, 13, 21];

  addParticipant(name: string): void {
    this.participants.push({ name, selectedCard: undefined });
  }

  selectCardForParticipant(participant: Participant, selectCard: number): void {
    this.participants[this.participants.indexOf(participant)].selectedCard = selectCard;
  }
}
