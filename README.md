## 🎩 Minimal Angular Library Starter

This starter if for you need to create a library for your Angular (v2+) application.

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
