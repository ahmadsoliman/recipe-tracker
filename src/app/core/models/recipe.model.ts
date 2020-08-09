export class Recipe {
  public constructor(
    public description: string,
    public ingredients: string[],
    public cookingSteps: string[],
    public picturesUrls: string[]
  ) {}
  public static createNew(): Recipe {
    return new Recipe('', [], [], []);
  }
}
