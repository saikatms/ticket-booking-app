import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@saikatprojectms/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
