import { EventHandler, Listener } from "../src";

class DummyEvent {}

class DummyListener extends Listener {
    @EventHandler
    dummyFunction(ev: DummyEvent) {
    }
}

describe(EventHandler, () => {
    it("override function and call addFunction with it", () => {
        const listener = new DummyListener();
        listener.dummyFunction(new DummyEvent());

        // @ts-ignore
        expect(listener.eventsTable).toHaveLength(1);
    });
});
