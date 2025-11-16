import { Article } from "../models/article";
import { PaginationData } from "../models/pagination-data";

export function getArticleById(id: number): Article {
  const articles = getAllArticles();
  const article = articles.find(x => x.id == id);
  if (article) {
    return article;
  } else {
    throw new Error("Article not found");
  }
}

export function getArticleByRoute(id: string): Article {
  const articles = getAllArticles();
  const article = articles.find(x => x.route == id);
  if (article) {
    return article;
  } else {
    throw new Error("Article not found");
  }
}

export function getPageOfArticles(searchTerm: string | null, page: number, articlesPerPage: number): PaginationData {

  let articles = getAllArticles();
  let refinedArticles: Article[] = [];
  if (searchTerm !== null && searchTerm !== undefined && searchTerm !== '') {
    searchTerm = searchTerm.toLocaleLowerCase();
    
    for (let item of articles) {
      if (item.heading.toLocaleLowerCase().includes(searchTerm)
      || item.subHeading.toLocaleLowerCase().includes(searchTerm)
      || item.author.toLocaleLowerCase().includes(searchTerm)) {
        refinedArticles.push(item);
      }
    }

    articles = refinedArticles
  }

  const totalItems = articles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / articlesPerPage));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = Math.min(startIndex + articlesPerPage, totalItems);

  const paginatedItems = articles.slice(startIndex, endIndex);

  return {
    currentPage,
    articlesPerPage,
    totalItems,
    totalPages,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
    items: paginatedItems
  };
}

export function getAllArticles(): Article[] {
  let articleIndex: Article[] = [];

  articleIndex.push({
    id: 1,
    route: `I-have-burnout-from-work-and-I-don't-know-what-to-do`,
    author: 'Michael Truman',
    heading: `I have burnout from work, and I don't know what to do`,
    subHeading: `Do what you love and you'll never work a day in your life".... What a a load of crap!`,
    dateCreated: new Date(2025, 5, 25),
    imageUrl: 'office-stress.jpg'
  } as Article);

  articleIndex.push({
    id: 2,
    route: `10-things-I-wish-my-dad-had-taught-me`,
    author: 'Michael Truman',
    heading: '10 things I wish my dad had taught me',
    subHeading: `I learned the hard way many times, hopefully my son won't have to`,
    dateCreated: new Date(2025, 9, 23),
    imageUrl: 'father-kids-silouette.jpg'
  } as Article);

  articleIndex.push({
    id: 3,
    route: `The-skills-all-men-should-know-by-the-time-they-have-a-family-of-their-own`,
    author: 'Michael Truman',
    heading: 'The skills all men should know by the time they have a family of their own',
    subHeading: `Whether it's a flat tyre or a dead boiler, everyone is looking at you to save the day.`,
    dateCreated: new Date(2025, 9, 23),
    imageUrl: 'dad-fixer.jpg'
  } as Article);

  articleIndex.push({
    id: 4,
    route: `The-midlife-crisis-we-are-looking-at-it-wrong`,
    author: 'Michael Truman',
    heading: 'The midlife crisis, we are looking at it wrong',
    subHeading: `It' not all old bald guys driving convertible porsche's. The truth of what he's actually going through, and how to help.`,
    dateCreated: new Date(2025, 9, 23)
  } as Article);

  articleIndex.push({
    id: 5,
    route: `How-to-ACTUALLY-succeed-at-a-job-interview`,
    author: 'Michael Truman',
    heading: 'How to ACTUALLY succeed at a job interview',
    subHeading: `What they teach you about interviews is rubbish, I've attending hundreds and here's my take.`,
    dateCreated: new Date(2025, 9, 23)
  } as Article);

  articleIndex.push({
    id: 6,
    route: `My-child-has-ADHD-and-I'm-struggling-to-navigate-it`,
    author: 'Michael Truman',
    heading: `My child has ADHD and I'm struggling to navigate it`,
    subHeading: `From laughing until I can't breath to extreme guilt after a shouting match, it's been a rollercoaster. Here are some key moments and take-aways.`,
    dateCreated: new Date(2025, 9, 23)
  } as Article);

  articleIndex.push({
    id: 7,
    route: `Dads-mental-health-the-truth`,
    author: 'Michael Truman',
    heading: 'Dads mental health - the truth',
    subHeading: `The silent destroyer of men and families alike, it's finally being brought into the spotlight. But it's not enough.`,
    dateCreated: new Date(2025, 9, 23)
  } as Article);

  return articleIndex;
}