/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Course as PrismaCourse,
  Enrollment as PrismaEnrollment,
  Resource as PrismaResource,
  Session as PrismaSession,
} from "@prisma/client";

export class CourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CourseCountArgs, "select">): Promise<number> {
    return this.prisma.course.count(args);
  }

  async courses(args: Prisma.CourseFindManyArgs): Promise<PrismaCourse[]> {
    return this.prisma.course.findMany(args);
  }
  async course(
    args: Prisma.CourseFindUniqueArgs
  ): Promise<PrismaCourse | null> {
    return this.prisma.course.findUnique(args);
  }
  async createCourse(args: Prisma.CourseCreateArgs): Promise<PrismaCourse> {
    return this.prisma.course.create(args);
  }
  async updateCourse(args: Prisma.CourseUpdateArgs): Promise<PrismaCourse> {
    return this.prisma.course.update(args);
  }
  async deleteCourse(args: Prisma.CourseDeleteArgs): Promise<PrismaCourse> {
    return this.prisma.course.delete(args);
  }

  async findEnrollments(
    parentId: string,
    args: Prisma.EnrollmentFindManyArgs
  ): Promise<PrismaEnrollment[]> {
    return this.prisma.course
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .enrollments(args);
  }

  async findResources(
    parentId: string,
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.course
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resources(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<PrismaSession[]> {
    return this.prisma.course
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessions(args);
  }
}
