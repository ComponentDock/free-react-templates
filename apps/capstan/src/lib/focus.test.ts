import { focusNode } from './focus'

describe('focusNode — the one place focus is moved', () => {
  it('lands focus on a node it was handed', () => {
    const button = document.createElement('button')

    document.body.append(button)

    focusNode(button)

    expect(document.activeElement).toBe(button)

    button.remove()
  })

  it('leaves focus where it is when there is no node', () => {
    const resting = document.activeElement

    focusNode(null)
    focusNode(undefined)

    expect(document.activeElement).toBe(resting)
  })
})
