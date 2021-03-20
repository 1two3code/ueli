import Winston from "winston";

const logFormat = Winston.format.printf(
  ({ level, message, timestamp, stack }) =>
    `${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ""}`
);
export default logFormat;
