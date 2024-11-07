//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPerson } from "./initials";
import { Person } from "./types/Person";
import { GenericPayload } from "./types/GenericPayload";
import useBuildingData from "../utils/BuildingDataProvider";
export const AccessSlice = createSlice({
  name: "claims",
  initialState: initialPerson,
  reducers: {
    changePermission: (state: Person, action: PayloadAction<number>) => {
      state.floorAccess[action.payload] = !state.floorAccess[action.payload];
    },
  },
});
