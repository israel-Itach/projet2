import { createContext } from "react";

const BikeContext = createContext({});

export default BikeContext;
export const BikeProvider = BikeContext.Provider;
export const BikeConsumer = BikeContext.Consumer;
