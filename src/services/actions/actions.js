import { Add_To_Cart } from "../reducers/constants";

export const addToCart = (itemData) => {
  return {
    type: Add_To_Cart,
    data: itemData,
  };
};
