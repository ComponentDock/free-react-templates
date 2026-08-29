import { render, screen } from '@testing-library/react'
import { RoundedOutlineButtons } from './RoundedOutlineButtons'

describe('RoundedOutlineButtons', () => {
  it('renders 10 rounded outline buttons', () => {
    render(<RoundedOutlineButtons />)
    const defaults = screen.getAllByRole('button', { name: /default/i })
    expect(defaults.length).toBe(10)
  })

  it('buttons have pill-shaped styling', () => {
    const { container } = render(<RoundedOutlineButtons />)
    const buttons = container.querySelectorAll('button')
    for (const btn of buttons) {
      expect(btn.className).toContain('rounded-full')
    }
  })
})
