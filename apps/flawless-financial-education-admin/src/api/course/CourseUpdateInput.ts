import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { ResourceUpdateManyWithoutCoursesInput } from "./ResourceUpdateManyWithoutCoursesInput";
import { SessionUpdateManyWithoutCoursesInput } from "./SessionUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  category?: "Option1" | null;
  description?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  resources?: ResourceUpdateManyWithoutCoursesInput;
  sessions?: SessionUpdateManyWithoutCoursesInput;
  title?: string | null;
};
