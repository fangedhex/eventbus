import { EventBus, EventHandler } from "../src";

class DummyEvent {
  constructor(readonly done: jest.DoneCallback) {}
}

class DummyListener {
  private isDefined = true;

  @EventHandler
  onHandle(ev: DummyEvent) {
    expect(this.isDefined).toBeDefined();
    expect(ev).toBeDefined();
    expect(ev.done).toBeDefined();
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
});
