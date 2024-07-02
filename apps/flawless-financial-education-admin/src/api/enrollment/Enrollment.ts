import { Course } from "../course/Course";
import { User } from "../user/User";

export type Enrollment = {
  course?: Course | null;
  createdAt: Date;
  id: string;
  progress: number | null;
  updatedAt: Date;
  user?: User | null;
};
