import axios from "axios";

interface WordType {
  pos: string;
}

interface Translation {
  text: string;
  wordType: WordType;
}

interface ExactMatch {
  translations: Translation[];
}

interface TranslationResponse {
  exactMatches?: ExactMatch[];
}

export default class LingueeTranslator {
  public static getTranslations(url: string): Promise<Translation[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(response => {
          const data = response.data as TranslationResponse;
          let translations: Translation[] = [];
          if (data.exactMatches) {
            data.exactMatches
              .map(exactMatch => exactMatch.translations)
              .forEach(t => {
                translations = translations.concat(t);
              });
          }
          resolve(translations);
        })
        .catch(err => reject(err));
    });
  }
}
