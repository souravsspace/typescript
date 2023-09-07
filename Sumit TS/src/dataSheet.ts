import { dataSheetInterface } from "./Interface/";

export class dataSheet implements dataSheetInterface {
  constructor(
    public herName: string,
    readonly herAge: number | null,
    private herIsComplited: boolean
  ) {}

  getHerName(): string {
    return this.herName;
  }
  getHerAge(): number | null {
    return this.herAge;
  }
}
