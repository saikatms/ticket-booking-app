import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@saikatprojectms/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
