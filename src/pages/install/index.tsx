import { useState } from 'react';

import { StoreInstallContext, StoreInstall } from './ContextStore';
import { ContextApi, api } from './ContextApi';
import { default as PageComponent } from './Install';

// eslint-disable-next-line import/no-default-export
export default function Wrapper(props: any) {
  const [storeInstall] = useState(() => new StoreInstall());

  return (
    <StoreInstallContext.Provider value={storeInstall}>
      <ContextApi.Provider value={api}>
        <PageComponent {...props} />
      </ContextApi.Provider>
    </StoreInstallContext.Provider>
  );
}
