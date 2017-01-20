/**
 * @flow
 */
import channels from './channels'

describe('Channels', () => {
  it('should be a function', () => {
    expect(channels.get instanceof Function).toBe(true)
  })
})
