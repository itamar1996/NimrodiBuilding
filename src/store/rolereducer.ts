//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPerson } from "./initials";
import { Person } from "./types/Person";
import optionalroles from "../data/roles.json";

export const RoleSlice  = createSlice({
    name: "claims",
    initialState: initialPerson,
    reducers: {      
        chanceRole: (state: Person, action: PayloadAction<number>) => {  
        state.Role = optionalroles[action.payload]
      }
    },
  });