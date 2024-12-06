import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export class StoreInstall {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  data = 1;

  products = [
    {
      name: '',
    },
  ];
}

export const StoreInstallContext = createContext<StoreInstall>(null as any);
