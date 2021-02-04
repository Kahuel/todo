interface Payload {
  task?: Task;
  title?: string;
  id?: number;
  language?: string;
  status?: string;
  description?: string;
  initTasks?: Task[];
  updatedTask?: Task;
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
  id: number;
  title: string;
  status: string;
  description: string;
}
