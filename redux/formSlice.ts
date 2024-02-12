import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { addons, subscriptionPlan } from "@/types/types";

// Define a slice of state
interface formState {
  yearly: boolean;
  subscriptionPlan: subscriptionPlan | null;
  addons: addons[] | null;
}

const initialState: formState = {
  yearly: false,
  subscriptionPlan: {
    id: "arcade",
    title: "Arcade",
    src: "/arcade-svg.svg",
    monthly_amount: 9,
    yearly_amount: 90,
    free: "2 months free",
  },
  addons: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setYearly(state, action: PayloadAction<formState["yearly"]>) {
      state.yearly = action.payload;
    },
    setSubscriptionPlan(
      state,
      action: PayloadAction<formState["subscriptionPlan"]>
    ) {
      state.subscriptionPlan = action.payload;
    },
    setAddons(state, action: PayloadAction<formState["addons"]>) {
      state.addons = action.payload;
    },
  },
});

// Export the actions
export const { setYearly, setSubscriptionPlan, setAddons } = formSlice.actions;

// Export the reducer
export const formReducer = formSlice.reducer;
export const Yearly = (state: RootState) => state.form.yearly;
export const SubscriptionPlan = (state: RootState) =>
  state.form.subscriptionPlan;

export const Addons = (state: RootState) => state.form.addons;
