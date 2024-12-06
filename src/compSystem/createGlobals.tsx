import { createContextProps } from 'dk-react-mobx-globals';

import { TypeGlobals } from 'models';
import globalActions from 'actions';
import * as staticStores from 'stores';

export function createGlobals(req?: TypeGlobals['req'], res?: TypeGlobals['res']) {
  const globals = createContextProps<TypeGlobals>({
    req,
    res,
    api: {},
    request: () => Promise.resolve(),
    staticStores,
    apiValidators: {},
    globalActions,
  });

  return globals;
}
