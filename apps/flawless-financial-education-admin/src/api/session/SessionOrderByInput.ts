import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
