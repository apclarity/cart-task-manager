import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice"
import productReducer from "../features/products/productSlice";
import cartReducer, { CartState } from "../features/cart/cartSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const loadCartState = (): CartState | undefined => {
  try {
    const serialized = localStorage.getItem("cart");
    if (!serialized) return undefined;
    return JSON.parse(serialized) as CartState;
  } catch {
    return undefined;
  }
};

const saveCartState = (state: { cart: CartState }) => {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem("cart", serialized);
  } catch (e) {
    console.error("Error while saving", e);
  }
};

const preloadedCart = loadCartState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    products: productReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: preloadedCart ?? { items: [] },
  },
});

store.subscribe(() => {
  saveCartState({ cart: store.getState().cart });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
