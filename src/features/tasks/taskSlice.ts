import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  list: Task[];
}

const initialState: TaskState = {
  list: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(), 
        title: action.payload,
        completed: false,
      });
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(state, action: PayloadAction<number>) {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
