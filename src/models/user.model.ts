import { z } from 'zod'
import { GenericResponse } from './generic'
import { Roles } from '../validations/user.validation'


export type Role = z.infer<typeof Roles>

// User interface representing the structure of a user object
export interface User {
  id: number // Unique identifier for the user
  username: string // Username of the user
  email: string // User's email
  role: Role // User's role, using Roles from validation
}

// Login response that includes user, refresh token, and access tokens
export type LoginResponse = GenericResponse<{
  user: User // User information
  refresh: string // Refresh token string
  tokens: Tokens // Tokens containing access and optional refresh token
}>

// Tokens interface for access and refresh tokens
export interface Tokens {
  access: Access // Access token
  refresh?: Access // Optional refresh token
}

// Access token structure with token string and expiration date
export interface Access {
  token: string // The JWT access token
  expires: Date // Expiration date of the token
}

// Request structure for logging in
export interface LoginRequest {
  email: string // Email for user login
  password: string // Password for user login
}

// Request structure for signing up a new user
export interface SignUpRequest {
  username: string // Username for new user
  email: string // Email for new user
  password: string // Password for new user
  confirmPassword: string // Confirm password for new user
}
