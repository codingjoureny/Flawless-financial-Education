import { SortOrder } from "../../util/SortOrder";

export type EnrollmentOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
