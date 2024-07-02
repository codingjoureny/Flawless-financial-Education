import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { ResourceCreateNestedManyWithoutCoursesInput } from "./ResourceCreateNestedManyWithoutCoursesInput";
import { SessionCreateNestedManyWithoutCoursesInput } from "./SessionCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  category?: "Option1" | null;
  description?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  resources?: ResourceCreateNestedManyWithoutCoursesInput;
  sessions?: SessionCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};
