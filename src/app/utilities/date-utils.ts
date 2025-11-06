import { formatDate } from "@angular/common";
import { Article } from "../models/article";

function parseDateString(date: Date): string {
    // Year / month / day
    const splitDate = date.toString().split('T')[0].split('-');
    const formattedDate = new Date(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]));

    return formatDate(formattedDate,'MMM dd yyyy','en-US');
  }
  