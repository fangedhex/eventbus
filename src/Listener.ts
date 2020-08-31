import { Event } from "./Event";
import * as Debugger from "debug";

/** @internal */
const debug = Debugger("eventbus:listener");

/** @internal */
type EventFunction = (ev: Event) => void;

export abstract class Listener {
  private eventsTable?: EventFunction[];

  private createTable() {
    this.eventsTable = [];
  }

  /**
   * Function called by the decorator on a method to add it to the list
   * @param fct
   * @internal
   */
  addFunction(fct: EventFunction): void {
    if (!this.eventsTable) this.createTable();
    debug("Adding event function to event table : %O", fct);
    this.eventsTable?.push(fct);
  }

  /**
   * Called by the EventBus when an event is fired
   * @param event
   * @internal
   */
  emit(event: Event): void {
    if (!this.eventsTable) this.createTable();
    this.eventsTable?.forEach((callback) => {
      callback.bind(this)(event);
    });
  }
}
