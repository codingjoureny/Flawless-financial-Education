import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type SessionCreateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
  videoUrl?: string | null;
};
