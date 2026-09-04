import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DemoSection } from './DemoSection'

describe('DemoSection', () => {
  it('renders the heading "Checkbox #03"', () => {
    render(<DemoSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Checkbox #03')
  })

  it('renders both checkbox chips in order', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(2)
    expect(checkboxes[0]).toHaveAccessibleName('Confirm Order One')
    expect(checkboxes[1]).toHaveAccessibleName('Confirm Order Two')
  })

  it('confines content in a centered layout', () => {
    const { container } = render(<DemoSection />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
