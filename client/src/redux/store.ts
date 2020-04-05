import {
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from "@reduxjs/toolkit"

import { rootReducer } from "./rootReducer"
import socketMiddleware from "../middleware/socketMiddleware"

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    socketMiddleware() as Middleware,
  ] as const,
})
