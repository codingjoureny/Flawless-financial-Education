import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
