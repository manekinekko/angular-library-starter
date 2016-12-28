## 🎩 Minimalist Angular Library Starter

This is a minimalist starter if you need to (quickly) create and ship a library for your Angular (v2+) applications.

## Most Important Files

#### package.json

```
{
    "name": "@manekinekko/angular-library-starter",
    "version": "1.0.0",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "private": false,
    "scripts": {
        "build:aot": "ngc -p tsconfig.json",
    },
    //...
}
```

#### tsconfig.json

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "es2015",
        "moduleResolution": "node",
        "declaration": true,
        "noImplicitAny": false,
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "skipLibCheck": true,
        "typeRoots": ["./node_modules/@types"],
        "types": ["node"],
        "lib": ["dom", "es2015"]
    },
    
    // this is for the AOT compiler
    "angularCompilerOptions": {
        "genDir": "dist",
        "entryModule": "src/lib/app.module#AppModule"
    },
    //...
}
```

## Disclaimers
1. This starter contains the minimum configuration for your library so it can be shared and used across other projects.
2. Tests are not included in this starter!


## Have a PR?

All contributions are welcome ;)

## License

The MIT License (MIT)
Copyright (c) 2016 - Wassim CHEGHAM

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
