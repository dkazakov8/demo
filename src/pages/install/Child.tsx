import { makeAutoObservable } from 'mobx';

import { useStoreInstall, ViewModelInstall } from 'pages/install/useStoreInstall';

import { StoreInstall } from './ContextStore';

class VM implements ViewModelInstall {
  constructor(public context: StoreInstall) {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export function Child() {
  const { vm } = useStoreInstall(VM);

  return <table>Child</table>;
}
