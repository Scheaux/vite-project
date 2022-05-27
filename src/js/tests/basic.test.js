import App from '../App';

test('init app', () => {
  const app = new App();
  expect(app.test()).toBe('success');
});

test('returns true', () => {
  expect(1).toEqual(1);
});
