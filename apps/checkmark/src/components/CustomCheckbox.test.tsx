import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomCheckbox } from './CustomCheckbox'

describe('CustomCheckbox', () => {
  it('renders with the given label', () => {
    render(<CustomCheckbox label="Test Option" />)
    expect(screen.getByText('Test Option')).toBeInTheDocument()
  })

  it('renders a checkbox input', () => {
    render(<CustomCheckbox label="My Check" />)
    const checkbox = screen.getByRole('checkbox', { name: 'My Check' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('starts unchecked by default', () => {
    render(<CustomCheckbox label="Default" />)
    expect(screen.getByRole('checkbox', { name: 'Default' })).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<CustomCheckbox label="Pre-checked" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Pre-checked' })).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<CustomCheckbox label="Click Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Click Me' })

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders all variant styles without crashing', () => {
    const variants = ['violet', 'emerald', 'rose', 'amber', 'sky'] as const
    for (const variant of variants) {
      const { unmount } = render(<CustomCheckbox label={`Variant ${variant}`} variant={variant} />)
      expect(screen.getByText(`Variant ${variant}`)).toBeInTheDocument()
      unmount()
    }
  })

  it('applies variant-specific classes when checked', async () => {
    const user = userEvent.setup()
    render(<CustomCheckbox label="Violet" variant="violet" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Violet' })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    const label = checkbox.closest('label')!
    expect(label.className).toContain('bg-violet-50')
  })

  it('shows checkmark icon when checked', async () => {
    const user = userEvent.setup()
    render(<CustomCheckbox label="Icon Test" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Icon Test' })

    expect(document.querySelector('svg')).not.toBeInTheDocument()
    await user.click(checkbox)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
