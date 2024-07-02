import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResourceWhereInput = {
  course?: CourseWhereUniqueInput;
  description?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
