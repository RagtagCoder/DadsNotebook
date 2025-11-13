import { Article } from "./article";

export interface PaginationData {
    currentPage: number,
    articlesPerPage: number,
    totalItems: number,
    totalPages: number,
    hasPrev: boolean,
    hasNext: boolean,
    items: Article[]
}