import { useStore, ViewModel } from 'hooks/useStore';
import { TypeGlobals } from 'models';
import { classToObservableAuto } from 'compSystem/transformers';

import { messages } from './messages';
import styles from './Error.scss';

export type PropsErrorPage = {
  errorNumber: number;
};

class VM implements ViewModel {
  constructor(
    public context: TypeGlobals,
    public props: PropsErrorPage
  ) {
    classToObservableAuto(__filename, this);
  }

  beforeMount() {
    const { actions } = this.context;

    void actions.routing.setMetaData({ title: messages.metaTitle });
  }
}

export function Error(props: PropsErrorPage) {
  const { context } = useStore(VM, props);

  const { errorNumber } = props;

  return (
    <div className={styles.content}>
      <div className={styles.title}>Error {errorNumber}</div>
    </div>
  );
}
