import { Access } from '../models/user.model'

class TokenService {
  private static instance: TokenService
  private accessToken: string | null = null
  private expiresAt: Date | null = null

  // Singleton pattern to ensure only one instance of TokenService
  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService()
    }
    return TokenService.instance
  }

  // Get the current access token
  public getAccessToken(): string | null {
    return this.accessToken
  }

  // Get the expiration date of the access token
  public getExpiresAt(): Date | null {
    return this.expiresAt
  }

  // Set the access token and its expiration (currently setting just the token)
  public setAccessToken(token: Access): void {
    this.accessToken = token.token // assuming token is an object with a token property
    // Uncomment and modify if you wish to handle expiration date
    // this.expiresAt = new Date(token.expires)
  }

  // Optionally, add a method to clear the token
  public clearToken(): void {
    this.accessToken = null
    this.expiresAt = null
  }
}

// Create a singleton instance of the TokenService
const tokenStore = TokenService.getInstance()

// Export tokenStore to be used throughout the application
export { tokenStore }
