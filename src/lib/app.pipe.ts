import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class AppPipe implements PipeTransform {
  transform(input: string, ...args) {
    return input;
  }
}
