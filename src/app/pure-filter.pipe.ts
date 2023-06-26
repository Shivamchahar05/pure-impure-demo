import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFilterPipe'
})
export class PureFilterPipe implements PipeTransform {

  transform(empArray: any[]): any {
    return empArray.filter(item => item.isFromAngularTeam);
  }

}
