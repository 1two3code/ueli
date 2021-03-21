// Typescript type declarations
declare module "*.svg" {}
declare module "simple-plist" {
  // eslint-disable-next-line import/prefer-default-export
  export function readFile(
    filePath: string,
    callback: (err: string, data: any) => void
  ): void;
}
