import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #13')
  })

  it('renders the subtitle', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Circular custom checkbox with coral accent')).toBeInTheDocument()
  })

  it('renders all four checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('First checkbox')).toBeInTheDocument()
    expect(screen.getByText('Second checkbox')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
    expect(screen.getByText('Disabled & checked')).toBeInTheDocument()
  })

  it('renders first checkbox as checked by default', () => {
    render(<CheckboxShowcase />)
    const first = screen.getByRole('checkbox', { name: 'First checkbox' })
    expect(first).toBeChecked()
  })

  it('renders second checkbox as unchecked by default', () => {
    render(<CheckboxShowcase />)
    const second = screen.getByRole('checkbox', { name: 'Second checkbox' })
    expect(second).not.toBeChecked()
  })

  it('renders disabled checkboxes as disabled', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Disabled' })).toBeDisabled()
    expect(screen.getByRole('checkbox', { name: 'Disabled & checked' })).toBeDisabled()
  })

  it('renders disabled & checked checkbox as checked', () => {
    render(<CheckboxShowcase />)
    const dc = screen.getByRole('checkbox', { name: 'Disabled & checked' })
    expect(dc).toBeChecked()
  })
})
