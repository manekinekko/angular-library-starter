import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { AppPipe } from './app.pipe';
import { AppComponent } from './component/app.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.forRoot = function () {
        return {
            ngModule: AppModule,
            providers: [
                AppService
            ]
        };
    };
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AppPipe, AppComponent],
                    exports: [AppPipe, AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-library-starter/lib/app.module.js.map