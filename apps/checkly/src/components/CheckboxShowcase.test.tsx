import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #02')
  })

  it('renders the sub-heading', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Choose your favorite sports')).toBeInTheDocument()
  })

  it('renders all 3 checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Basketball')).toBeInTheDocument()
    expect(screen.getByText('Baseball')).toBeInTheDocument()
    expect(screen.getByText('Badminton')).toBeInTheDocument()
  })

  it('renders 3 checkbox inputs', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(3)
  })

  it('marks Basketball as checked by default', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Basketball' })).toBeChecked()
  })

  it('marks Baseball and Badminton as unchecked by default', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Baseball' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Badminton' })).not.toBeChecked()
  })
})
