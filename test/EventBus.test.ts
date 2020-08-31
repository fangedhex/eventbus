import { EventBus, Listener } from "../src";
import { mock } from "jest-mock-extended";

class DummyEvent {}

describe(EventBus, () => {
  const listener = mock<Listener>();
  const eventbus = new EventBus();

  eventbus.registerListener(listener);

  it("dispatch the event to the listener", () => {
    const event = new DummyEvent();
    eventbus.dispatch(event);

    expect(listener.emit).toHaveBeenCalledWith(event);
  });
});
