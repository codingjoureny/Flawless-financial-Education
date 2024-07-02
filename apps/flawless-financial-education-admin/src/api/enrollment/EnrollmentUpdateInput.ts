import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  progress?: number | null;
  user?: UserWhereUniqueInput | null;
};
