import { makeAutoObservable } from 'mobx';
import { useContext } from 'react';

import { useStoreInstall, ViewModelInstall } from 'pages/install/useStoreInstall';
import { api } from 'pages/install/ContextApi';
import { Child } from 'pages/install/Child';

import styles from './Install.scss';
import { StoreInstall, StoreInstallContext } from './ContextStore';

class VM implements ViewModelInstall {
  constructor(public context: StoreInstall) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadDate() {
    void api.getData({ filters, pagination }).then((res) => {
      this.context.products = res;
    });
  }

  get data() {
    return this.context.data * 2;
  }
}

// eslint-disable-next-line import/no-default-export
export default function Filters() {
  const { vm } = useStoreInstall(VM);

  // useEffect(() => {
  //   setInterval(() => {
  //     void apiInstall.getData(storeInstall, { someParam: '' });
  //   }, 1000);
  // }, []);

  return (
    <div className={styles.wrapper}>
      Page Install {vm.data}
      <Child />
    </div>
  );
}
