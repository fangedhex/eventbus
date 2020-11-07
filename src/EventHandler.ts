/// <reference types="reflect-metadata" />
import { EventFunction, Listener } from "./Listener";
import { Event } from "./Event";
import * as Debugger from "debug";

const debug = Debugger("eventbus:event-handler");

/**
 * Create the event table on a listener object
 * @param listener
 * @internal
 */
function createTable(listener: Listener): void {
  listener.eventsTable = [];
}

/**
 * Function called by the decorator on a method to add it to the list
 * @param listener
 * @param fct
 * @internal
 */
function addFunction(listener: Listener, fct: EventFunction): void {
  if (!listener.eventsTable) createTable(listener);
  debug("Adding event function to event table : %O", fct);
  listener.eventsTable?.push(fct);
}

/**
 * Decorates a function as an event handler
 * @param target Class where the function is
 * @param propertyKey Name of the function
 * @param descriptor Descriptior of the function
 */
export function EventHandler<T>(
  target: T & Listener,
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

      addFunction(target, descriptor.value);
    }
  }

  return descriptor;
}
