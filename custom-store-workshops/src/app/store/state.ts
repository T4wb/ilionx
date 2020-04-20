// state.ts - our interfaces (no implementation)
export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export interface State {
  todos: Todo[];
  counter: number;
  movies: any[]; // TODO - create a IMovie interface or the like
  // other slices of the store
}
