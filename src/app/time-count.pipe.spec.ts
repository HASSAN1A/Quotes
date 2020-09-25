import { TimeCountPipe } from './time-count.pipe';

describe('TimeCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeCountPipe();
    expect(pipe).toBeTruthy();
  });
});
