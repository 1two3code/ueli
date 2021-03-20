import { ConfigRepository } from "./config-repository";
import { UserConfigOptions } from "./user-config-options";

export default class InMemoryConfigRepository implements ConfigRepository {
  private config: UserConfigOptions;

  constructor(config: UserConfigOptions) {
    this.config = config;
  }

  public getConfig(): UserConfigOptions {
    return this.config;
  }

  public saveConfig(updatedConfig: UserConfigOptions): Promise<void> {
    return new Promise(resolve => {
      this.config = updatedConfig;
      resolve();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public openConfigFile(): void {
    throw new Error("Not implemented");
  }
}
