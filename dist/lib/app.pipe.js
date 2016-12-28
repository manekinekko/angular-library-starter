import { Pipe } from '@angular/core';
export var AppPipe = (function () {
    function AppPipe() {
    }
    AppPipe.prototype.transform = function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return input.substring(args[0] || 0, args[1] || 5) + "...";
    };
    AppPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'truncate'
                },] },
    ];
    /** @nocollapse */
    AppPipe.ctorParameters = function () { return []; };
    return AppPipe;
}());
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-library-starter/lib/app.pipe.js.map