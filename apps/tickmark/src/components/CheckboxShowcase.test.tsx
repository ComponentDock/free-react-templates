import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #01')
  })

  it('renders all 6 checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Danger')).toBeInTheDocument()
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
  })

  it('renders 6 checkbox inputs', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(6)
  })

  it('marks the disabled checkbox as disabled', () => {
    render(<CheckboxShowcase />)
    const disabled = screen.getByRole('checkbox', { name: 'Disabled' })
    expect(disabled).toBeDisabled()
  })
})
