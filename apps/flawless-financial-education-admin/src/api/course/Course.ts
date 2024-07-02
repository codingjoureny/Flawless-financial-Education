import { Enrollment } from "../enrollment/Enrollment";
import { Resource } from "../resource/Resource";
import { Session } from "../session/Session";

export type Course = {
  category?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  enrollments?: Array<Enrollment>;
  id: string;
  resources?: Array<Resource>;
  sessions?: Array<Session>;
  title: string | null;
  updatedAt: Date;
};
