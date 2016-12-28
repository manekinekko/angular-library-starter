import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
  getDate() {
    return new Date();
  }
}
