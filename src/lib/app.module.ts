import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppService } from './app.service';
import { AppPipe } from './app.pipe';
import { AppComponent } from './component/app.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppPipe, AppComponent],
  exports: [AppPipe, AppComponent]
})
export class AppModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        AppService
      ]
    };
  }
}
