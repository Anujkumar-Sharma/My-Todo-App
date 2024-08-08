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

const demoTodos: Array<Todo> = [
  {
    id: "ab8ab583-b2cc-47ce-aa01-3524d9e240c9",
    title: "Submit Task",
    notes: "",
    steps: [],
    repeat: true,
    important: false,
    status: "completed",
    createdAt: new Date("2024-08-06T22:14:12.450Z"),
    dueDate: new Date("2024-08-08T18:30:00.000Z"),
  },
  {
    id: "8926d5b6-0dd7-4758-acab-56dff2305f37",
    title: "Create New Task",
    notes: "",
    steps: [],
    repeat: true,
    important: false,
    status: "todo",
    createdAt: new Date("2024-08-07T04:26:59.515Z"),
  },
  {
    id: "1bd41b3d-77d4-491b-960c-08dad414adc3",
    title: "Schedule Interview",
    notes: "",
    steps: [],
    repeat: false,
    important: true,
    status: "todo",
    createdAt: new Date("2024-08-07T04:28:16.351Z"),
  },
  {
    id: "33bd5dd5-158e-4cea-ba7a-778cf1d1d9da",
    title: "Create Appointment Letter",
    notes: "",
    steps: [],
    repeat: false,
    important: true,
    status: "todo",
    createdAt: new Date("2024-08-08T01:41:46.559Z"),
  },
];

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
  todos: demoTodos,
  selectedTab: "all-tasks",
  display: "row",
  theme: "dark",
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
