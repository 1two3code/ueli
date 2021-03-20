import { ExecutionPlugin } from "../../execution-plugin";
import { PluginType } from "../../plugin-type";
import { SearchResultItem } from "../../../common/search-result-item";
import { TranslationSet } from "../../../common/translation/translation-set";
import { UserConfigOptions } from "../../../common/config/user-config-options";
import { CurrencyCode, isCurrencyCode } from "./currency-code";
import { CurrencyConverterOptions } from "../../../common/config/currency-converter-options";
import CurrencyConverter from "./currency-converter";
import { CurrencyConversion } from "./currency-conversion";
import { defaultCurrencyExchangeIcon } from "../../../common/icon/default-icons";
import { GeneralOptions } from "../../../common/config/general-options";

export default class CurrencyConverterPlugin implements ExecutionPlugin {
  public readonly pluginType = PluginType.CurrencyConverter;

  private config: CurrencyConverterOptions;

  private generalConfig: GeneralOptions;

  private translationSet: TranslationSet;

  private readonly clipboardCopier: (value: string) => Promise<void>;

  constructor(
    config: UserConfigOptions,
    translationSet: TranslationSet,
    clipboardCopier: (value: string) => Promise<void>
  ) {
    this.config = config.currencyConverterOptions;
    this.generalConfig = config.generalOptions;
    this.translationSet = translationSet;
    this.clipboardCopier = clipboardCopier;
  }

  public isValidUserInput(userInput: string): boolean {
    const words = userInput.trim().split(" ");
    if (words.length === 4) {
      try {
        return (
          !Number.isNaN(this.getNumber(words[0])) &&
          isCurrencyCode(words[1]) &&
          words[2] === "in" &&
          isCurrencyCode(words[3])
        );
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  }

  public getSearchResults(userInput: string): Promise<SearchResultItem[]> {
    return new Promise((resolve, reject) => {
      const conversion = this.buildCurrencyConversion(userInput);
      CurrencyConverter.convert(conversion, Number(this.config.precision))
        .then(converted => {
          const convertedString = this.convertToString(converted);
          const result: SearchResultItem = {
            description: this.translationSet.currencyConverterCopyToClipboard,
            executionArgument: convertedString,
            hideMainWindowAfterExecution: true,
            icon: defaultCurrencyExchangeIcon,
            name: `= ${convertedString} ${conversion.target}`,
            originPluginType: this.pluginType,
            searchable: []
          };
          resolve([result]);
        })
        .catch(err => reject(err));
    });
  }

  private getNumber(numericStringValue: string): number {
    if (this.generalConfig.decimalSeparator === ".") {
      return Number(numericStringValue);
    }
    return Number(
      numericStringValue.replaceAll(this.generalConfig.decimalSeparator, ".")
    );
  }

  private convertToString(numericValue: number): string {
    if (this.generalConfig.decimalSeparator === ".") {
      return numericValue.toString();
    }
    return numericValue
      .toString()
      .replace(".", this.generalConfig.decimalSeparator);
  }

  public isEnabled(): boolean {
    return this.config.isEnabled;
  }

  public execute(searchResultItem: SearchResultItem): Promise<void> {
    return this.clipboardCopier(searchResultItem.executionArgument);
  }

  public updateConfig(
    updatedConfig: UserConfigOptions,
    translationSet: TranslationSet
  ): Promise<void> {
    return new Promise(resolve => {
      this.config = updatedConfig.currencyConverterOptions;
      this.generalConfig = updatedConfig.generalOptions;
      this.translationSet = translationSet;
      resolve();
    });
  }

  private buildCurrencyConversion(userInput: string): CurrencyConversion {
    const words = userInput.split(" ");
    return {
      base:
        Object.values(CurrencyCode).find(
          (c: CurrencyCode) => c.toLowerCase() === words[1].toLowerCase()
        ) || CurrencyCode.EUR,
      target:
        Object.values(CurrencyCode).find(
          (c: CurrencyCode) => c.toLowerCase() === words[3].toLowerCase()
        ) || CurrencyCode.USD,
      value: this.getNumber(words[0])
    };
  }
}
