import { TypeTranslations } from 'dk-localize';
import { TypeThemes } from 'dk-file-generator/dist/src/plugins/theme/types';

import { classToObservableAuto } from 'compSystem/transformers';
import { themes } from 'themes';
import { getTypedKeys } from 'utils';
import { TypeLanguage, TypeMetaData } from 'models';

// eslint-disable-next-line import/no-default-export
export default class StoreUi {
  lnData: TypeTranslations = {};
  currentLanguage: TypeLanguage = 'ru';
  currentTheme: keyof typeof themes = 'light';
  themeParams: TypeThemes[keyof typeof themes] = {};
  themesList = getTypedKeys(themes);
  metaData: TypeMetaData = {};
  screen = { width: 0, height: 0, scrollTop: 0 };

  constructor() {
    classToObservableAuto(__filename, this);
  }
}
