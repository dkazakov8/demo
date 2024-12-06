import { createContext } from 'react';

import { StoreInstall } from './store';

export const ContextInstall = createContext<StoreInstall | null>(null);
