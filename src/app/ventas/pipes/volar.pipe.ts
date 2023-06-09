import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volar'
})
export class VolarPipe implements PipeTransform {
  transform(vuela: boolean): string {
      return vuela ? 'Si' : 'No'
  }
}