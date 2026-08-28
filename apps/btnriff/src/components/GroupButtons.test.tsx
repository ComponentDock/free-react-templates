import { render } from '@testing-library/react'
import { GroupButtons } from './GroupButtons'

describe('GroupButtons', () => {
  it('renders 2 button groups', () => {
    const { container } = render(<GroupButtons />)
    const groups = container.querySelectorAll('[data-button-group]')
    expect(groups.length).toBe(2)
  })

  it('each group has 3 buttons (solid, outline, solid)', () => {
    const { container } = render(<GroupButtons />)
    const groups = container.querySelectorAll('[data-button-group]')
    for (const group of groups) {
      const buttons = group.querySelectorAll('button')
      expect(buttons.length).toBe(3)
    }
  })

  it('renders primary and secondary groups', () => {
    const { container } = render(<GroupButtons />)
    expect(container.querySelector('[data-button-group="primary"]')).toBeInTheDocument()
    expect(container.querySelector('[data-button-group="secondary"]')).toBeInTheDocument()
  })
})
