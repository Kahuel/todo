interface Payload {
  title?: string;
  id?: string;
  language?: string;
  status?: string;
  description?: string;
  initTasks?: any;
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
  title: string;
  language: string;
  filter: string;
  token: string;
}

export interface Task {
  id: string;
  title: string;
  state: string;
  description: string;
}
