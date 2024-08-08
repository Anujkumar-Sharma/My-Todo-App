import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoSliceState = {
  avatar?: string;
  userName?: string;
  email?: string;
  todos: Array<Todo>;
  selectedTodo?: Todo | null;
  selectedTab?: string;
  theme?: string;
  display?: string;
};

export type TodoStatusType = "todo" | "completed";

export enum TodoStatus {
  "TODO" = "todo",
  "COMPLETED" = "completed",
}

export type Todo = {
  id: string;
  title: string;
  notes: string;
  steps: Array<string>;
  reminder?: Date;
  dueDate?: Date;
  repeat: boolean;
  important: boolean;
  status: "todo" | "completed";
  createdAt?: Date;
};

const initialState: TodoSliceState = {
  avatar: "",
  userName: "",
  email: "",
  todos: [],
  selectedTab: "all-tasks",
  display: "grid",
};

const todoSlice = createSlice({
  name: "todo-slice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TodoSliceState>) => {
      state.avatar = action.payload?.avatar;
      state.email = action.payload?.email;
      state.userName = action.payload?.userName;
    },
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push({ ...action.payload, createdAt: new Date() });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      const { id, ...update } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...update };
      } else {
        console.log(`Item with id ${id} not found.`);
      }
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    changeTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleDisplay: (state) => {
      state.display = state.display === "grid" ? "row" : "grid";
    },
  },
});

export const {
  setUser,
  createTodo,
  updateTodo,
  deleteTodo,
  setSelectedTodo,
  changeTab,
  setTheme,
  toggleDisplay,
} = todoSlice.actions;
export default todoSlice.reducer;
