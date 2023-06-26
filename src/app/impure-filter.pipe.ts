import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilterPipe',
  pure: false
})
export class ImpureFilterPipe implements PipeTransform {

  transform(empArray: any[]): any {
    return empArray.filter(item => item.isFromAngularTeam);
  }

}
