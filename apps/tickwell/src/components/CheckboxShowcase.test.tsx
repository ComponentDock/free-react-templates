import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading "Checkbox #05"', () => {
    render(<CheckboxShowcase />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Checkbox #05')
  })

  it('renders the subtitle', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Animated checkmark checkboxes')).toBeInTheDocument()
  })

  it('renders all 3 checkbox options with labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Enable Dark Mode')).toBeInTheDocument()
    expect(screen.getByText('Send Email Notifications')).toBeInTheDocument()
    expect(screen.getByText('Accept Terms & Conditions')).toBeInTheDocument()
  })

  it('renders 3 checkbox inputs', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(3)
  })

  it('confines content in a centered layout', () => {
    const { container } = render(<CheckboxShowcase />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
