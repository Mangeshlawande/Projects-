// import {z} from 'zod';

// export const acceptMessageSchema = z.object({
//     acceptMessages : z.boolean(),

// })

import { z } from 'zod'

export const AcceptMessageSchema = z.object({
  acceptMessages: z.boolean(),
});