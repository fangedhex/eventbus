import { Event } from "./Event";
import * as Debugger from "debug";

/** @internal */
const debug = Debugger("eventbus:listener");

/** @internal */
export type EventFunction = (ev: Event) => void;

export interface Listener {
  /**
   * Contains every functions that handle events
   * @internal
   */
  eventsTable?: EventFunction[] | null;
}
