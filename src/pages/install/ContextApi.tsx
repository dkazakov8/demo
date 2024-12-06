import { createContext } from 'react';
import { addState } from 'dk-mobx-stateful-fn';

type TypeRequest = {
  someParam: string;
};

type TypeResponse = {
  data: number;
};

type TypeError = {};

const getData: {
  error: TypeError;
  request: TypeRequest;
  response: TypeResponse;
  url: string;
  method: string;
} = {
  url: `https://mocki.io/v1/dceaf7d9-242e-4889-9f69-f46d568c2a4d`,
  method: 'GET',
  error: {} as TypeError,
  request: {} as TypeRequest,
  response: {} as TypeResponse,
};

export const api = {
  getData: addState((requestParams: TypeRequest) => {
    const apiConfig = getData;

    return fetch(apiConfig.url, {
      method: apiConfig.method,
      // body: JSON.stringify(requestParams),
    }).then((response) => response.json() as Promise<(typeof apiConfig)['response']>);
  }, 'getData'),
};

export const ContextApi = createContext<typeof api | null>(null);
