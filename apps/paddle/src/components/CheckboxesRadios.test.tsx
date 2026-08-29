import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckboxesRadios } from './CheckboxesRadios'

describe('CheckboxesRadios', () => {
  it('renders 5 checkboxes', () => {
    render(<CheckboxesRadios />)
    expect(screen.getByLabelText('Primary checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Success checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Danger checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Warning checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Disabled checkbox')).toBeInTheDocument()
  })

  it('renders 5 radios', () => {
    render(<CheckboxesRadios />)
    expect(screen.getByLabelText('Primary radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Success radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Danger radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Warning radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Disabled radio')).toBeInTheDocument()
  })

  it('first 4 checkboxes are checked by default', () => {
    render(<CheckboxesRadios />)
    expect(screen.getByLabelText('Primary checkbox')).toBeChecked()
    expect(screen.getByLabelText('Success checkbox')).toBeChecked()
    expect(screen.getByLabelText('Danger checkbox')).toBeChecked()
    expect(screen.getByLabelText('Warning checkbox')).toBeChecked()
  })

  it('disabled checkbox is checked', () => {
    render(<CheckboxesRadios />)
    const disabled = screen.getByLabelText('Disabled checkbox')
    expect(disabled).toBeChecked()
    expect(disabled).toBeDisabled()
  })

  it('clicking a checkbox toggles it', async () => {
    const user = userEvent.setup()
    render(<CheckboxesRadios />)
    const cb = screen.getByLabelText('Primary checkbox')
    expect(cb).toBeChecked()
    await user.click(cb)
    expect(cb).not.toBeChecked()
    await user.click(cb)
    expect(cb).toBeChecked()
  })

  it('radios are checked by default', () => {
    render(<CheckboxesRadios />)
    expect(screen.getByLabelText('Primary radio')).toBeChecked()
    expect(screen.getByLabelText('Success radio')).toBeChecked()
    expect(screen.getByLabelText('Danger radio')).toBeChecked()
    expect(screen.getByLabelText('Warning radio')).toBeChecked()
    expect(screen.getByLabelText('Disabled radio')).toBeChecked()
  })

  it('renders section headings', () => {
    render(<CheckboxesRadios />)
    expect(screen.getByText('Checkboxes')).toBeInTheDocument()
    expect(screen.getByText('Radios')).toBeInTheDocument()
  })
})
