import { Listener } from "../src";

class DummyListener extends Listener {}
class DummyEvent {}

describe(Listener, () => {
  const callback = jest.fn();
  const listener = new DummyListener();
  listener.addFunction(callback);

  it("calls our function added to the list", () => {
    const event = new DummyEvent();
    listener.emit(event);

    expect(callback).toHaveBeenCalledWith(event);
  });
});
