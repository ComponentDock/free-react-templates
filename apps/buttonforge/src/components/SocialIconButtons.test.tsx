import { render, screen } from '@testing-library/react'
import { SocialIconButtons } from './SocialIconButtons'

describe('SocialIconButtons', () => {
  it('renders social icon buttons', () => {
    render(<SocialIconButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('has buttons for all 5 social platforms', () => {
    const { container } = render(<SocialIconButtons />)
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(20)
  })

  it('renders solid, rounded, outline, and rounded-outline variants', () => {
    const { container } = render(<SocialIconButtons />)
    const rows = container.querySelectorAll('.flex.flex-wrap.gap-2')
    expect(rows.length).toBe(4)
  })
})
