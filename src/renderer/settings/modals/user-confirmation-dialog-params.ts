// eslint-disable-next-line no-shadow
export enum UserConfirmationDialogType {
  Default,
  Error
}
export interface UserConfirmationDialogParams {
  callback: () => void;
  message: string;
  modalTitle: string;
  type: UserConfirmationDialogType;
}
