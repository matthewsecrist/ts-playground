import { hello } from './hello.js'

describe('hello()', () => {
  it('returns `Hello, world!`', () => {
    expect(hello('world')).toBe('Hello, world!')
  })
})
