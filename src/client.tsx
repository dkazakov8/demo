import './styles/global.scss';

import { createRoot } from 'react-dom/client';
import { getInitialRoute } from 'dk-react-mobx-router';

import { App } from 'comp/app';
import { StoreContext } from 'compSystem/StoreContext';
import { createGlobals } from 'compSystem/createGlobals';
import { initAutorun } from 'autorun';
import { isomorphPolyfills } from 'utils';
import { routes } from 'routes';
import StoreUi from "stores/ui";
import {createContext} from "react";

isomorphPolyfills();

const globalsSystem = createGlobals();

void Promise.resolve()
  .then(() => initAutorun(globalsSystem))
  .then(() => globalsSystem.actions.client.beforeRender())
  .then(() =>
    globalsSystem.actions.routing.redirectTo(
      getInitialRoute({
        routes,
        pathname: location.pathname + location.search,
        fallback: 'error404',
      })
    )
  )
  .then(() =>
    createRoot(document.getElementById('app')!).render(
      <StoreContext.Provider value={globalsSystem}>
        <App />
      </StoreContext.Provider>
    )
  );
