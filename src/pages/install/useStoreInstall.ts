import { createUseStore, ViewModelConstructor } from 'dk-mobx-use-store';

import { StoreInstall, StoreInstallContext } from 'pages/install/ContextStore';

export type ViewModelInstall = ViewModelConstructor<StoreInstall>;

export const useStoreInstall = createUseStore(StoreInstallContext);
