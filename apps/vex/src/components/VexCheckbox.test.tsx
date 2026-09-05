import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VexCheckbox } from './VexCheckbox'

describe('VexCheckbox', () => {
  it('renders with the given label', () => {
    render(<VexCheckbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('renders unchecked by default', () => {
    render(<VexCheckbox label="Option" />)
    const input = screen.getByRole('checkbox', { name: 'Option' })
    expect(input).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<VexCheckbox label="Option" defaultChecked />)
    const input = screen.getByRole('checkbox', { name: 'Option' })
    expect(input).toBeChecked()
  })

  it('toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<VexCheckbox label="Toggle me" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle me' })

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('renders disabled checkbox', () => {
    render(<VexCheckbox label="Locked" disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked' })
    expect(input).toBeDisabled()
  })

  it('does not toggle when disabled checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<VexCheckbox label="Locked" disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked' })

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('does not toggle when disabled checked checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<VexCheckbox label="Locked on" defaultChecked disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked on' })

    expect(input).toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
  })

  it('shows checkmark SVG when checked', () => {
    render(<VexCheckbox label="With check" defaultChecked />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('polyline')).toBeInTheDocument()
  })

  it('hides checkmark SVG when unchecked', () => {
    render(<VexCheckbox label="No check" />)
    const svg = document.querySelector('svg')
    expect(svg).not.toBeInTheDocument()
  })

  it('applies opacity class when disabled', () => {
    const { container } = render(<VexCheckbox label="Faded" disabled />)
    const label = container.querySelector('label')
    expect(label?.className).toContain('opacity-50')
  })

  it('does not apply opacity class when enabled', () => {
    const { container } = render(<VexCheckbox label="Active" />)
    const label = container.querySelector('label')
    expect(label?.className).not.toContain('opacity-50')
  })

  it('applies indigo background when checked', () => {
    const { container } = render(<VexCheckbox label="Colored" defaultChecked />)
    const span = container.querySelector('label span')
    expect(span?.className).toContain('bg-primary-500')
  })

  it('applies border styling when unchecked', () => {
    const { container } = render(<VexCheckbox label="Bordered" />)
    const span = container.querySelector('label span')
    expect(span?.className).toContain('border-gray-300')
    expect(span?.className).toContain('bg-white')
  })
})
