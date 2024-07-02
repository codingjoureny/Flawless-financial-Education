import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ResourceCreateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  fileUrl?: string | null;
  title?: string | null;
};
