import { Schema } from './mongooseCommon';

// name: 'EnumLanguageName',
// description: 'Language names (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)',
const enumLanguageName = {
  en: { description: 'English' },
  ru: { description: 'Russian' },
  zh: { description: 'Chinese' },
};

const enumLanguageSkill = {
  basic: { description: 'can read' },
  fluent: { description: 'can talk' },
  native: { description: 'since birth' },
};

const LanguagesSchema = new Schema(
  {
    ln: {
      type: String,
      description: 'Language names (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)',
      enum: Object.keys(enumLanguageName),
    },
    sk: {
      type: String,
      description: 'Language skills',
      enum: Object.keys(enumLanguageSkill),
    },
  }
);

export default LanguagesSchema;
