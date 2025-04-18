import { tokenStore } from '../store/token'

type RequestBody = undefined | Record<string, unknown> | FormData

class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl =  'http://192.168.0.110:8000/api/v2'
    // this.baseUrl = import.meta.env.VITE_APP_URL || '';
  }
  

  private async request<T>(
    endpoint: string,
    method: string = 'GET',
    body: RequestBody = undefined,
    headers: Record<string, string> = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`
    const mainHeader = new Headers(headers)
    const options: RequestInit = {
      method,
      headers: mainHeader, // Set headers initially
    }

    // Retrieve the access token from the store
    const token = tokenStore.getAccessToken() ?? ' '

    // Set 'Content-Type' to 'application/json' by default
    mainHeader.set('Content-Type', 'application/json')

    // If a token exists, set it in the Authorization header
    if (token) {
      mainHeader.set('Authorization', `Bearer ${token}`)
    }
    
    // If there's a request body, add it to the options
    if (body) {
      if (body instanceof FormData) {
        options.body = body
        mainHeader.set('Content-Type', 'multipart/form-data')
      } else {
        options.body = JSON.stringify(body)
      }
    }

    
    try {
      options.headers = mainHeader
      const response = await fetch(url, options)
      return response.json()
    } catch (error) {
      console.error('API request error:', error)
      throw error
    }
  }

  // GET request
  get<T>(endpoint: string, headers: Record<string, string> = {}): Promise<T> {
    return this.request<T>(endpoint, 'GET', undefined, headers)
  }

  // POST request
  post<T>(
    endpoint: string,
    body: RequestBody,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'POST', body, headers)
  }

  // PUT request
  put<T>(
    endpoint: string,
    body: RequestBody,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'PUT', body, headers)
  }

  // DELETE request
  delete<T>(
    endpoint: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'DELETE', undefined, headers)
  }
}

// Export the instance of ApiService
export const apiService = new ApiService()
