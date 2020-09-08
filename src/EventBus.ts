import { Listener } from "./Listener";
import { Event } from "./Event";
import * as Debugger from "debug";

/** @internal */
const debug = Debugger("eventbus");

/**
 * Called by the EventBus when an event is fired
 * @param listener
 * @param event
 * @internal
 */
function emit(listener: Listener, event: Event): void {
  if (!listener.eventsTable) return;
  listener.eventsTable?.forEach((callback) => {
    callback.bind(listener)(event);
  });
}

export class EventBus {
  private listeners: Listener[] = [];

  /**
   * Register a new listener to that event bus
   * @param listener
   */
  registerListener<T>(listener: T & Listener): void {
    debug("Registering listener : %O", listener);
    this.listeners.push(listener);
  }

  /**
   * Dispatch an event through our listeners
   * @param event
   */
  dispatch(event: Event): void {
    debug("Dispatching event : %O", event);
    this.listeners.forEach((listener) => {
      emit(listener, event);
    });
  }
}
