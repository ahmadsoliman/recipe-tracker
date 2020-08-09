export class Recipe {
  public constructor(
    public recipeId: string,
    public title: string,
    public description: string,
    public rating: number,
    public ingredients: string[],
    public cookingSteps: string[],
    public picturesUrls: string[]
  ) {}
  public static createNew(): Recipe {
    return new Recipe('', '', '', 5, [], [], []);
  }
}
