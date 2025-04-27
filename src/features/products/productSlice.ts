import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  material?: string;
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return [
    {
      id: "1",
      name: "Nike",
      material: "Material Rubber Sole",
      description: `
      <p>Detail:</p><br>
      <ul>
        <li>Colorway: White</li>
        <li>Brand New in Box (BNIB) / Tag (BNWT)</li>
      </ul>
      `,
      price: 499000,
      image: "/nike.jpg"
    },
    {
      id: "2",
      name: "Puma Suede Classic X Karl",
      material: "Material Suede",
      description: `
      <p>Detail:</p><br>
      <ul>
        <li>Colorway: White</li>
        <li>Brand New in Box (BNIB) / Tag (BNWT)</li>
      </ul>
      `,
      price: 99000,
      image: "/puma.jpg"
    },
     {
      id: "3",
      name: "Nike Air Force 1 Mid React",
      material: "Material React Foam",
      description: `
      <p>Detail:</p><br>
      <ul>
        <li>Colorway: White</li>
        <li>Brand New in Box (BNIB) / Tag (BNWT)</li>
      </ul>
      `,
      price: 300000,
      image: "/nike-airforce.jpg"
    }
  ];
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productSlice.reducer;
