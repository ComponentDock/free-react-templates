import { render } from '@testing-library/react'
import { GroupButtons } from './GroupButtons'

describe('GroupButtons', () => {
  it('renders 3 button groups', () => {
    const { container } = render(<GroupButtons />)
    const groups = container.querySelectorAll('[data-button-group]')
    expect(groups.length).toBe(3)
  })

  it('each group has 3 buttons (solid, outline, solid)', () => {
    const { container } = render(<GroupButtons />)
    const groups = container.querySelectorAll('[data-button-group]')
    for (const group of groups) {
      const buttons = group.querySelectorAll('button')
      expect(buttons.length).toBe(3)
    }
  })

  it('renders blue, indigo, and purple groups', () => {
    const { container } = render(<GroupButtons />)
    expect(container.querySelector('[data-button-group="blue"]')).toBeInTheDocument()
    expect(container.querySelector('[data-button-group="indigo"]')).toBeInTheDocument()
    expect(container.querySelector('[data-button-group="purple"]')).toBeInTheDocument()
  })
})
