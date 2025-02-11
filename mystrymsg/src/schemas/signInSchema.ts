// import {z} from 'zod';

// //email :: identifier

// export const signInSchema = z.object({
//     identifier : z.string(),
//     password: z.string(),


// })

import { z } from 'zod'

export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});

