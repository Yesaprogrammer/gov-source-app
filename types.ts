
export enum ApiStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface Source {
  uri: string;
  title: string;
}

export interface ResultData {
  answer: string;
  sources: Source[];
}
