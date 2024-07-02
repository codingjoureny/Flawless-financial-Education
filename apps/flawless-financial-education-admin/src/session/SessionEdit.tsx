import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourseTitle } from "../course/CourseTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
