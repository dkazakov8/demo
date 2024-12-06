import { TypeAction } from 'models';

export const beforeRender: TypeAction = ({ actions, store }) => {
  return Promise.resolve()
    .then(() =>
      Promise.all([
        actions.ui.setScreenSize(),
        actions.ui.setTheme({ theme: store.ui.currentTheme }),
      ])
    )
    .then(() => undefined);
};