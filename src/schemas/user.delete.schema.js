import z from "zod";


export const deleteUserSchema = z.object({
    params: z.object({
        email: z.email({ error: 'Email parameter must be a valid email.'})
    })
})