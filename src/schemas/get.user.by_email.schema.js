import z from "zod";


export const getUserByEmailSchema = z.object({
    params: z.object({
        email: z.email({ error: 'Email parameter must be a valid email' })
    })
})