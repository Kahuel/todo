interface Payload {
  text?: string;
  id?: string;
  language?: string;
  status?: string;
  description?: string;
}

export interface Gayload {
  from: number;
  to: number;
}

export interface Action {
  type: string;
  payload: Payload;
}

export interface State {
  tasks: [];
  text: string;
  language: string;
  filter: string;
  token: string;
}

export interface Task {
  id: string;
  text: string;
  state: string;
  description: string;
}
