import { z } from "zod";

/**projects**/

export const projectSchema=z.object({
    _id:z.string(),
    projectName:z.string(),
    clientName:z.string(),
    description:z.string()
})
export type Project=z.infer<typeof projectSchema>

export type ProjectFormData=Pick<Project,'clientName'|'description'| 'projectName'>

export const dashboardProjectSchema=z.array(
    projectSchema.pick({
        _id:true,
        projectName:true,
        clientName:true,
        description:true
    })
)