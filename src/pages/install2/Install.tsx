import { useContext, useEffect } from 'react';

import { ContextInstall } from './ContextInstall';
import { ContextInstallApi } from './api';
import styles from './Install.scss';

// eslint-disable-next-line import/no-default-export
export default function Install() {
  const contextInstall = useContext(ContextInstall)!;
  const contextInstallApi = useContext(ContextInstallApi)!;

  useEffect(() => {
    void contextInstallApi.getUsers(contextInstall, { someParam: '' }).then((response) => {
      console.jsf('response', response);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      Page Install {contextInstall.data}{' '}
      {contextInstallApi.getUsers.state.isExecuting && ' Loading....'}
    </div>
  );
}
