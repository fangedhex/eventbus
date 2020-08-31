/// <reference types="reflect-metadata" />
import { Listener } from "./Listener";
import { Event } from "./Event";

/**
 * Decorates a function as an event handler
 * @param target Class where the function is
 * @param propertyKey Name of the function
 * @param descriptor Descriptior of the function
 */
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
