import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #11')
  })

  it('renders the subtitle', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Bootstrap custom checkbox component demo')).toBeInTheDocument()
  })

  it('renders all 4 checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('First checkbox')).toBeInTheDocument()
    expect(screen.getByText('Second checkbox')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
    expect(screen.getByText('Disabled & checked')).toBeInTheDocument()
  })

  it('renders 4 checkbox inputs', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)
  })

  it('marks First checkbox as checked by default', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'First checkbox' })).toBeChecked()
  })

  it('marks Second checkbox as unchecked by default', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Second checkbox' })).not.toBeChecked()
  })

  it('marks Disabled as unchecked and disabled', () => {
    render(<CheckboxShowcase />)
    const cb = screen.getByRole('checkbox', { name: 'Disabled' })
    expect(cb).not.toBeChecked()
    expect(cb).toBeDisabled()
  })

  it('marks Disabled & checked as checked and disabled', () => {
    render(<CheckboxShowcase />)
    const cb = screen.getByRole('checkbox', { name: 'Disabled & checked' })
    expect(cb).toBeChecked()
    expect(cb).toBeDisabled()
  })
})
