import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@saikatprojectms/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
