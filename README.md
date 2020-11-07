# EventBus

![GitHub](https://img.shields.io/github/license/fangedhex/eventbus)
![npm (scoped)](https://img.shields.io/npm/v/@fangedhex/eventbus)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fangedhex/eventbus/CI)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/fangedhex/eventbus)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@fangedhex/eventbus)
![npm](https://img.shields.io/npm/dw/@fangedhex/eventbus)
![npm](https://img.shields.io/npm/dm/@fangedhex/eventbus)

## Description

A small typescript library that provide some eventbus system that is """easier""" to use.

I made this library that I will use for my bot written in Typescript : I did a separate one so if you can use it
if you find it useful :)

## tsconfig.json

You need at least this 2 options :

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Reflect-metadata

You should import reflect-metadata at the top of your main file like this :

```typescript
import "reflect-metadata";

// YOUR CODE HERE
```

## Example

```typescript
import { EventHandler, Eventbus, Listener } from "@fangedhex/eventbus";

// 1 - Create your events
class MyCustomEvent {
  constructor(public readonly value: string) {}
}

class MyCustomEvent2 {
  constructor(public readonly value: number) {}
}

// 2 - Create your listener class
class MyListener {
  @EventHandler
  onSomething(ev: MyCustomEvent) {
    console.info("TEST : " + ev.value);
  }

  @EventHandler
  onSomething2(ev: MyCustomEvent2) {
    console.info("TEST2 : " + ev.value);
  }
}

// 3 - And how to use it
const eventbus = new Eventbus();
const listener = new MyListener();
eventbus.registerListener(listener);

eventbus.dispatch(new MyCustomEvent("myvalue"));
eventbus.dispatch(new MyCustomEvent2(5.5));
eventbus.dispatch(new MyCustomEvent2(5.8));
```

## Contributing

If you find any bugs or you want to give feedback feel free to do so :).
