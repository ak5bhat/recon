import { Pipe, PipeTransform } from '@angular/core';
import { Nms } from './loginsuccess/nms/nms.component';

@Pipe({
  name: 'fileFilterPipe'
})
export class FileFilterPipePipe implements PipeTransform {

  transform(list: Nms[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
    searchText = searchText.toLocaleLowerCase();

    list = list.filter(s => {
      return s.Serialnumber.toLocaleLowerCase().includes(searchText);
    });
    return list;

  }

}
