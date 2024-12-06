import { makeAutoObservable } from 'mobx';

export class StoreInstall {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  data = 1;
}
