import { Listener } from "./Listener";
import { Event } from "./Event";
import * as Debugger from "debug";

/** @internal */
const debug = Debugger("eventbus");

export class EventBus {
  private listeners: Listener[] = [];

  /**
   * Register a new listener to that event bus
   * @param listener
   */
  registerListener(listener: Listener): void {
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
      listener.emit(event);
    });
  }
}
