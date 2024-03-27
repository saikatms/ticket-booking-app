import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@saikatprojectms/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
