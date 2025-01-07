export const INCREMENT_COUNTER = "Increment";
export const DECREMENT_COUNTER = "Decrement";
export const RESET_COUNTER = "Reset";

export const incrementCounter = () => ({ type: INCREMENT_COUNTER });
export const decrementCounter = () => ({ type: DECREMENT_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
