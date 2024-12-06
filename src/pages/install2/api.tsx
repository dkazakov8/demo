import { ContextType, createContext } from 'react';
import { addState } from 'dk-mobx-stateful-fn';

import { ContextInstall } from './ContextInstall';

type TypeRequest = {
  someParam: string;
};

type TypeResponse = {
  data: string;
};

type TypeError = {};

export const getUsers: {
  url: string;
  method: string;
  error: TypeError;
  request: TypeRequest;
  response: TypeResponse;
} = {
  url: `https://mocki.io/v1/dceaf7d9-242e-4889-9f69-f46d568c2a4d`,
  method: 'GET',
  error: {} as TypeError,
  request: {} as TypeRequest,
  response: {} as TypeResponse,
};

const api = {
  getUsers: addState(
    (
      contextInstall: ContextType<typeof ContextInstall>,
      requestParams: (typeof getUsers)['request']
    ) => {
      const apiConfig = getUsers;

      return fetch(apiConfig.url, {
        // mode: 'no-cors',
        method: apiConfig.method,
        // body: JSON.stringify(requestParams),
      }).then((response) => response.json());
    },
    'getUsers'
  ),
};

export { api };

export const ContextInstallApi = createContext<typeof api | null>(null);
