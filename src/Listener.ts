import { Event } from "./Event";

export abstract class Listener {
    private eventsTable?: Function[];

    private createTable() {
        this.eventsTable = [];
    }

    /**
     * Function called by the decorator on a method to add it to the list
     * @param fct
     */
    addFunction(fct: Function) {
        if(!this.eventsTable) this.createTable();
        this.eventsTable?.push(fct);
    }

    /**
     * Called by the EventBus when an event is fired
     * @param event
     */
    emit(event: Event) {
        if(!this.eventsTable) this.createTable();
        this.eventsTable?.forEach((callback) => {
            callback(event);
        });
    }
}
