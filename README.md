# EventBus

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
class MyListener extends Listener {
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

I did this code in less than 1 day so it's pretty simple but if you know a better way to code it or you think
my tests are not good, feel free to fork and make a pull request later :)

I also added a FUNDING.yml in this project but I don't expect this project will bring some funding
because it is quite simple to make.
