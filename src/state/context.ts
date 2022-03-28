import { createContext } from "react";
import { TDContext } from "../types/types";

const ToDoContext= createContext<TDContext>({} as TDContext);

export default ToDoContext;