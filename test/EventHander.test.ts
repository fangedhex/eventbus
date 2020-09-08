import { EventHandler } from "../src";

class DummyEvent {}

class DummyListener {
  @EventHandler
  dummyFunction(ev: DummyEvent) {
    console.dir(ev);
  }
}

describe(EventHandler, () => {
  it("override function and call addFunction with it", () => {
    const listener = new DummyListener();
    listener.dummyFunction(new DummyEvent());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(listener.eventsTable).toHaveLength(1);
  });
});
