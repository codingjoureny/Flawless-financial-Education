import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentWhereInput = {
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  progress?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
