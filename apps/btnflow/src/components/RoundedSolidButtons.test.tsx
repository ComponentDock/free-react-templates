import { render, screen } from '@testing-library/react'
import { RoundedSolidButtons } from './RoundedSolidButtons'

describe('RoundedSolidButtons', () => {
  it('renders 10 rounded solid buttons', () => {
    render(<RoundedSolidButtons />)
    const defaults = screen.getAllByRole('button', { name: /default/i })
    expect(defaults.length).toBe(10)
  })

  it('buttons have pill-shaped styling (rounded-full)', () => {
    const { container } = render(<RoundedSolidButtons />)
    const buttons = container.querySelectorAll('button')
    for (const btn of buttons) {
      expect(btn.className).toContain('rounded-full')
    }
  })
})
