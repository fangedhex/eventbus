import { EventBus, EventHandler, Listener } from "../src";

class DummyEvent {
    constructor(readonly done: jest.DoneCallback) {
    }
}

class DummyListener extends Listener {
    @EventHandler
    onHandle(ev: DummyEvent) {
        ev.done();
    }
}

describe("Integration", () => {
    it("handles emitted event", (done) => {
        const eventBus = new EventBus();
        const listener = new DummyListener();

        eventBus.registerListener(listener);

        eventBus.dispatch(new DummyEvent(done));
    });
})
