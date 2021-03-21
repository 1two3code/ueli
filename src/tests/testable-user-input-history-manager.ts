import UserInputHistoryManager from "../main/user-input-history-manager";

export default class TestableUserInputHistoryManager extends UserInputHistoryManager {
  public getHistory(): string[] {
    return this.history;
  }

  public setHistory(history: string[]): void {
    this.history = history;
    this.index = this.history.length;
  }

  public getIndex(): number {
    return this.index;
  }

  public setIndex(index: number): void {
    this.index = index;
  }
}
