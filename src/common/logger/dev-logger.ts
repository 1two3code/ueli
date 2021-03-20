import Winston from "winston";
import { Logger } from "./logger";
import logFormat from "../helpers/logger-helpers";

export default class DevLogger implements Logger {
  private readonly logger: Winston.Logger;

  constructor() {
    const { combine, timestamp, errors } = Winston.format;

    this.logger = Winston.createLogger({
      defaultMeta: { service: "user-service" },
      format: combine(errors({ stack: true }), timestamp(), logFormat),
      level: "debug",
      transports: [new Winston.transports.Console({ level: "debug" })]
    });
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }

  // eslint-disable-next-line class-methods-use-this
  public openLog(): Promise<void> {
    return Promise.reject(new Error("Dev logger does not have a log file"));
  }
}
