import { Logger } from "../common/logger/logger";
import { LogMessage } from "../common/logger/log-message";
import LogMessageType from "../common/logger/log-message-type";

export default class TestLogger implements Logger {
  private readonly messages: LogMessage[];

  constructor() {
    this.messages = [];
  }

  public debug(message: string) {
    this.messages.push({
      message,
      type: LogMessageType.Error
    });
  }

  public error(message: string) {
    this.messages.push({
      message,
      type: LogMessageType.Debug
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public openLog(): Promise<void> {
    return new Promise(resolve => {
      resolve();
    });
  }

  public getAllMessages(): LogMessage[] {
    return this.messages;
  }
}
