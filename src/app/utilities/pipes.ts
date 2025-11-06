import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate'
})
export class OrdinalDatePipe implements PipeTransform {

  transform(value: Date | string | number): string {
    if (!value) return '';

    // Ensure we have a Date object
    const date = new Date(value);
    if (isNaN(date.getTime())) return '';

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${day}${this.getOrdinalSuffix(day)} ${month} ${year}`;
  }

  private getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}
