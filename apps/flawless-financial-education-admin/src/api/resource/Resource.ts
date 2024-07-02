import { Course } from "../course/Course";

export type Resource = {
  course?: Course | null;
  createdAt: Date;
  description: string | null;
  fileUrl: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
