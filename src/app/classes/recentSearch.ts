export class RecentSearch {
  name: string;
  count: number;

  constructor(source: any) {
    this.name = source.name;
    this.count = source.count;
  }
}
