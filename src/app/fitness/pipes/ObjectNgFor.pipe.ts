import { Pipe, type PipeTransform } from '@angular/core';

/**
 * Will return only the keys of the JS object passed as an argument
 * { 'key1': {'a':1}, 'key2': {'b':2}, 'key3': {'c':3}} | objectNgFor
 *
 * Returns: ['key1', 'key2', 'key3']
 *
 */

@Pipe({
  name: 'objectNgFor',
  standalone: true,
})
export class ObjectNgForPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return Object.keys(value);
  }
}
