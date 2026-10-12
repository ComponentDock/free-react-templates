import { render, screen } from '@testing-library/react'
import { focusNode } from './focus'

describe('focusNode — moving focus to a node this app rendered', () => {
  it('focuses the node it is given', () => {
    render(<button type="button">target</button>)

    focusNode(screen.getByRole('button', { name: 'target' }))

    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'target' }))
  })

  it('does nothing at all when there is no node to focus', () => {
    const before = document.activeElement

    focusNode(null)
    focusNode(undefined)

    expect(document.activeElement).toBe(before)
  })
})
