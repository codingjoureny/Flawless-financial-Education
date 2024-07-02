import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type SessionUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
  videoUrl?: string | null;
};
