import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SessionWhereInput = {
  course?: CourseWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
