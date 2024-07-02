import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type CourseWhereInput = {
  category?: "Option1";
  description?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  resources?: ResourceListRelationFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
};
