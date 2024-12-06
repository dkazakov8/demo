import { useState } from 'react';

import { api, ContextInstallApi } from './api';
import { default as PageComponent } from './Install';
import { StoreInstall } from './store';
import { ContextInstall } from './ContextInstall';

function Wrapper(props: any) {
  const [storeInstall] = useState(() => new StoreInstall());
  const [valueApi] = useState(() => api);

  return (
    <ContextInstall.Provider value={storeInstall}>
      <ContextInstallApi.Provider value={valueApi}>
        <PageComponent {...props} />
      </ContextInstallApi.Provider>
    </ContextInstall.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default Wrapper;
