import { Beer } from "./beerInterface";

export type StartStackParams = {
  HomeScreen: undefined;
  DetailBeerScreen: {
    item: Beer
  }
  InfoScreen: undefined;
};
