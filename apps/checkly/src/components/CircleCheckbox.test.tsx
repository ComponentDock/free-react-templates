import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CircleCheckbox } from './CircleCheckbox'

describe('CircleCheckbox', () => {
  it('renders with the given label', () => {
    render(<CircleCheckbox label="Basketball" />)
    expect(screen.getByText('Basketball')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<CircleCheckbox label="Basketball" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Basketball' })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles to checked when clicked', async () => {
    const user = userEvent.setup()
    render(<CircleCheckbox label="Basketball" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Basketball' })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<CircleCheckbox label="Basketball" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Basketball' })).toBeChecked()
  })

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup()
    render(<CircleCheckbox label="Basketball" disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Basketball' })

    expect(checkbox).toBeDisabled()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows a checkmark SVG when checked', async () => {
    const user = userEvent.setup()
    render(<CircleCheckbox label="Basketball" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Basketball' })

    expect(document.querySelector('svg polyline')).not.toBeInTheDocument()
    await user.click(checkbox)

    const svg = document.querySelector('svg polyline')
    expect(svg).toBeInTheDocument()
  })

  it('shows a dot indicator when unchecked', () => {
    render(<CircleCheckbox label="Basketball" />)
    const dot = document.querySelector('.rounded-full.bg-gray-300')
    expect(dot).toBeInTheDocument()
  })

  it('hides the dot indicator when checked', async () => {
    const user = userEvent.setup()
    render(<CircleCheckbox label="Basketball" />)
    expect(document.querySelector('.rounded-full.bg-gray-300')).toBeInTheDocument()

    await user.click(screen.getByRole('checkbox', { name: 'Basketball' }))
    expect(document.querySelector('.rounded-full.bg-gray-300')).not.toBeInTheDocument()
  })
})
