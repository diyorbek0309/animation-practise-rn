export interface IData {
  id: number;
  text: string;
  uri: string;
}

export interface IDeck {
  data: IData[];
  renderCard: (item: IData) => JSX.Element;
}
