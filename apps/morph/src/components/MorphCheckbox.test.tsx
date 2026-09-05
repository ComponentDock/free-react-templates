import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MorphCheckbox } from './MorphCheckbox'

describe('MorphCheckbox', () => {
  it('renders with label text', () => {
    render(<MorphCheckbox label="Task One" />)
    expect(screen.getByText('Task One')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<MorphCheckbox label="Task One" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles to checked on click', async () => {
    const user = userEvent.setup()
    render(<MorphCheckbox label="Task One" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    await user.click(screen.getByText('Task One'))
    expect(checkbox).toBeChecked()
  })

  it('toggles back to unchecked on second click', async () => {
    const user = userEvent.setup()
    render(<MorphCheckbox label="Task One" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    await user.click(screen.getByText('Task One'))
    await user.click(screen.getByText('Task One'))
    expect(checkbox).not.toBeChecked()
  })

  it('supports defaultChecked', () => {
    render(<MorphCheckbox label="Task One" defaultChecked />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    expect(checkbox).toBeChecked()
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    render(<MorphCheckbox label="Task One" disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    await user.click(screen.getByText('Task One'))
    expect(checkbox).not.toBeChecked()
  })

  it('has reduced opacity when disabled', () => {
    const { container } = render(<MorphCheckbox label="Task One" disabled />)
    const label = container.querySelector('label')
    expect(label?.className).toContain('opacity-60')
  })

  it('renders the tick SVG when checked', () => {
    render(<MorphCheckbox label="Task One" defaultChecked />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('polyline')).toBeInTheDocument()
  })

  it('links checkbox input to label via htmlFor', () => {
    render(<MorphCheckbox label="Task One" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    const label = screen.getByText('Task One').closest('label')
    expect(label).toHaveAttribute('for', checkbox.id)
  })
})
