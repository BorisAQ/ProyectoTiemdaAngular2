import { MonPipe } from './mon.pipe';

describe('MonPipe', () => {
  it('create an instance', () => {
    const pipe = new MonPipe();
    expect(pipe).toBeTruthy();
  });
});
