import { useContext, useEffect } from 'react';

import styles from './Install.scss';
import { StoreInstallContext } from './ContextStore';
import { ContextApi } from './ContextApi';

// eslint-disable-next-line import/no-default-export
export default function Install() {
  const storeInstall = useContext(StoreInstallContext)!;
  const apiInstall = useContext(ContextApi)!;

  useEffect(() => {
    setInterval(() => {
      void apiInstall.getData(storeInstall, { someParam: '' });
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      Page Install {storeInstall?.data} {apiInstall.getData.state.isExecuting && ' Loading...'}
    </div>
  );
}
