import { Pipe, PipeTransform } from '@angular/core';
// added pipe to display date format on details page
@Pipe({
  name: 'myDateFormat',
  standalone: true
})
export class MyDateFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return value;
    }

    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

}
