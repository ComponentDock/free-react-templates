import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AnimatedCheckbox } from './AnimatedCheckbox'

describe('AnimatedCheckbox', () => {
  it('renders with the given label', () => {
    render(<AnimatedCheckbox label="Test Option" />)
    expect(screen.getByText('Test Option')).toBeInTheDocument()
  })

  it('renders a checkbox input', () => {
    render(<AnimatedCheckbox label="Test Option" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Test Option' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('starts unchecked by default', () => {
    render(<AnimatedCheckbox label="My Option" />)
    expect(screen.getByRole('checkbox', { name: 'My Option' })).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<AnimatedCheckbox label="Pre-checked" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Pre-checked' })).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<AnimatedCheckbox label="Click Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Click Me' })

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('toggles on Space key', async () => {
    const user = userEvent.setup()
    render(<AnimatedCheckbox label="Space Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Space Me' })

    checkbox.focus()
    expect(checkbox).not.toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).not.toBeChecked()
  })

  it('renders SVG checkmark element', () => {
    const { container } = render(<AnimatedCheckbox label="SVG Check" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies indigo background class when checked', async () => {
    const user = userEvent.setup()
    const { container } = render(<AnimatedCheckbox label="Color Check" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Color Check' })

    await user.click(checkbox)
    const label = container.querySelector('label')
    expect(label?.className).toContain('bg-brand-indigo/10')
  })
})
