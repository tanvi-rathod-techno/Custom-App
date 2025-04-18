// src/validations/user.validation.ts
import { z } from 'zod';

export const Roles = z.enum(['admin', 'user']); // Define Roles as a Zod enum
