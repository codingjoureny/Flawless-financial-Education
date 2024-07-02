/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Resource } from "./Resource";
import { ResourceCountArgs } from "./ResourceCountArgs";
import { ResourceFindManyArgs } from "./ResourceFindManyArgs";
import { ResourceFindUniqueArgs } from "./ResourceFindUniqueArgs";
import { CreateResourceArgs } from "./CreateResourceArgs";
import { UpdateResourceArgs } from "./UpdateResourceArgs";
import { DeleteResourceArgs } from "./DeleteResourceArgs";
import { Course } from "../../course/base/Course";
import { ResourceService } from "../resource.service";
@graphql.Resolver(() => Resource)
export class ResourceResolverBase {
  constructor(protected readonly service: ResourceService) {}

  async _resourcesMeta(
    @graphql.Args() args: ResourceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Resource])
  async resources(
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    return this.service.resources(args);
  }

  @graphql.Query(() => Resource, { nullable: true })
  async resource(
    @graphql.Args() args: ResourceFindUniqueArgs
  ): Promise<Resource | null> {
    const result = await this.service.resource(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Resource)
  async createResource(
    @graphql.Args() args: CreateResourceArgs
  ): Promise<Resource> {
    return await this.service.createResource({
      ...args,
      data: {
        ...args.data,

        course: args.data.course
          ? {
              connect: args.data.course,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Resource)
  async updateResource(
    @graphql.Args() args: UpdateResourceArgs
  ): Promise<Resource | null> {
    try {
      return await this.service.updateResource({
        ...args,
        data: {
          ...args.data,

          course: args.data.course
            ? {
                connect: args.data.course,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Resource)
  async deleteResource(
    @graphql.Args() args: DeleteResourceArgs
  ): Promise<Resource | null> {
    try {
      return await this.service.deleteResource(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  async getCourse(@graphql.Parent() parent: Resource): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
