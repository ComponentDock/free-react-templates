import { focusNode } from './focus'

describe('focusNode', () => {
  it('moves focus to the node it is given', () => {
    const button = document.createElement('button')

    document.body.append(button)
    focusNode(button)

    expect(document.activeElement).toBe(button)

    button.remove()
  })

  it('does nothing when there is no node to focus', () => {
    expect(() => {
      focusNode(null)
    }).not.toThrow()
    expect(() => {
      focusNode(undefined)
    }).not.toThrow()
  })
})
