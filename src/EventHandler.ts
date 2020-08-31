import "reflect-metadata";
import { Listener } from "./Listener";
import { Event } from "./Event";

export function EventHandler(
  target: Listener,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  const params = Reflect.getMetadata("design:paramtypes", target, propertyKey);
  if (params !== undefined && Array.isArray(params)) {
    const Type = params[0];

    if (Type !== undefined) {
      descriptor.value = function (ev: Event) {
        if (ev instanceof Type) {
          original.call(this, ev);
        }
      };

      target.addFunction(descriptor.value);
    }
  }

  return descriptor;
}
