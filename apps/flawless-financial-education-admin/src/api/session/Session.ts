import { Course } from "../course/Course";

export type Session = {
  course?: Course | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  videoUrl: string | null;
};
