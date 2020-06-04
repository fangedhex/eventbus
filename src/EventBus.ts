import { Listener } from "./Listener";
import { Event } from "./Event";

export class EventBus {
    private listeners: Listener[] = [];

    /**
     * Register a new listener to that event bus
     * @param listener
     */
    registerListener(listener: Listener) {
        this.listeners.push(listener);
    }

    /**
     * Dispatch an event through our listeners
     * @param event
     */
    dispatch(event: Event) {
        this.listeners.forEach((listener) => {
            listener.emit(event);
        });
    }
}
