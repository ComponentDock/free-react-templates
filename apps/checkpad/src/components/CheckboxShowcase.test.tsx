import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Checkbox #19')
  })

  it('renders the description text', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText(/Bootstrap checkbox component demo/)).toBeInTheDocument()
  })

  it('renders checkbox options', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)
  })

  it('renders all checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('First checkbox')).toBeInTheDocument()
    expect(screen.getByText('Second checkbox')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
    expect(screen.getByText('Disabled & checked')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    const { container } = render(<CheckboxShowcase />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('has defaultChecked checkboxes checked', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'First checkbox' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Disabled & checked' })).toBeChecked()
  })

  it('has disabled checkboxes that are disabled', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Disabled' })).toBeDisabled()
    expect(screen.getByRole('checkbox', { name: 'Disabled & checked' })).toBeDisabled()
  })
})
