import { Article } from "../models/article";

 export function getIndexOfArticles(): Article[] {
    let articleIndex: Article[] = [];

    articleIndex.push({
      id: 'post-1',
      author: 'Michael Truman',
      heading: '10 things they don\'t tell you about being a dad',
      subHeading: 'It\'s full of surprises both good and bad. I really thought I was prepared... I was not.',
      dateCreated: new Date(2025, 5, 25)
    } as Article);

    articleIndex.push({
      id: 'post-2',
      author: 'Michael Truman',
      heading: 'I have burnout from work, and I don\'t know what to do',
      subHeading: '"Do what you love and you\'ll never work a day in your life".... What a a load of crap!',
      dateCreated: new Date(2025, 9, 23)
    } as Article);

    articleIndex.push({
      id: 'post-3',
      author: 'Michael Truman',
      heading: 'The skills all men should know by the time they have a family of their own',
      subHeading: 'Whether it\'s a flat tyre or a dead boiler, everyone is looking at you to save the day.',
      dateCreated: new Date(2025, 9, 23)
    } as Article);

    articleIndex.push({
      id: 'post-4',
      author: 'Michael Truman',
      heading: 'The midlife crisis, it\'s not what you think it is',
      subHeading: 'The truth of what he\'s actually going through, and how to help.',
      dateCreated: new Date(2025, 9, 23)
    } as Article);

    return articleIndex;
  }