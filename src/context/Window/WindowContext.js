import { createContext } from 'react';

const WindowContext = createContext({ close: null, min: null, max: null, isMax: false });
export { WindowContext };
