import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class AppPipe implements PipeTransform {
  transform(input: string, ...args) {
    return `${input.substring(args[0]||0, args[1]||5)}...`;
  }
}
