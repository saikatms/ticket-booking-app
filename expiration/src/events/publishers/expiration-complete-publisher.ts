import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@saikatprojectms/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
