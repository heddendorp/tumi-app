import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { EventListQuery } from '@tumi/data-access';

@Component({
  selector: 'tumi-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListItemComponent implements OnInit {
  @Input() public event: EventListQuery['events'][0] | null = null;
  constructor() {}

  ngOnInit(): void {}
}