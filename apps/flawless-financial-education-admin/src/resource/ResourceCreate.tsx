import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourseTitle } from "../course/CourseTitle";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="fileUrl" source="fileUrl" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
