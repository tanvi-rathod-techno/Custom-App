// models/generic.ts

export interface GenericResponse<T> {
  code: number;
  status: boolean;
  message: string;
  response: T;
}

export interface PaginatedData<T> {
  data: T[];
  current_page: number;
  total: number;
}

// This is the key fix 
export type PaginatedResponse<T> = GenericResponse<PaginatedData<T>>;
