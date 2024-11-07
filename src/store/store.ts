// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import { RoleSlice } from "./rolereducer";
import { AccessSlice } from "./floorreducer";
export default configureStore({
  reducer: {
    role: RoleSlice.reducer,
    floorAccess: AccessSlice.reducer,
  },
});

export const {
    changePermission,
    chanceRole

} = {
  ...RoleSlice.actions,
  ...AccessSlice.actions,
};
