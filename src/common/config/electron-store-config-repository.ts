/* eslint-disable import/first */
import Store = require("electron-store");
import { ConfigRepository } from "./config-repository";
import { UserConfigOptions } from "./user-config-options";
import { mergeUserConfigWithDefault } from "../helpers/config-helpers";

export default class ElectronStoreConfigRepository implements ConfigRepository {
  private readonly store: Store;

  private readonly configStoreKey = "userConfigOptions";

  private readonly defaultOptions: UserConfigOptions;

  constructor(defaultOptions: UserConfigOptions) {
    this.store = new Store();
    this.defaultOptions = defaultOptions;
  }

  public getConfig(): UserConfigOptions {
    const userConfig = this.store.get(this.configStoreKey);
    return mergeUserConfigWithDefault(userConfig, this.defaultOptions);
  }

  public saveConfig(updatedConfig: UserConfigOptions): Promise<void> {
    return new Promise(resolve => {
      this.store.set(this.configStoreKey, updatedConfig);
      resolve();
    });
  }

  public openConfigFile(): void {
    this.store.openInEditor();
  }
}
