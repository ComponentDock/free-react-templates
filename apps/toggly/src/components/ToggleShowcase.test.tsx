import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToggleShowcase } from './ToggleShowcase'

describe('ToggleShowcase', () => {
  it('renders the heading "Checkbox #06"', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Checkbox #06')
  })

  it('renders the sub-heading "Switch Toggle"', () => {
    render(<ToggleShowcase />)
    expect(screen.getByText('Switch Toggle')).toBeInTheDocument()
  })

  it('renders two toggle switches', () => {
    render(<ToggleShowcase />)
    const toggles = screen.getAllByRole('checkbox')
    expect(toggles).toHaveLength(2)
  })

  it('first toggle is unchecked by default', () => {
    render(<ToggleShowcase />)
    const toggles = screen.getAllByRole('checkbox')
    expect(toggles[0]!).not.toBeChecked()
  })

  it('second toggle is checked by default', () => {
    render(<ToggleShowcase />)
    const toggles = screen.getAllByRole('checkbox')
    expect(toggles[1]!).toBeChecked()
  })

  it('allows toggling each switch independently', async () => {
    const user = userEvent.setup()
    render(<ToggleShowcase />)
    const toggles = screen.getAllByRole('checkbox')

    // Toggle first from unchecked to checked
    await user.click(toggles[0]!)
    expect(toggles[0]).toBeChecked()

    // Toggle second from checked to unchecked
    await user.click(toggles[1]!)
    expect(toggles[1]).not.toBeChecked()
  })

  it('has a section element', () => {
    render(<ToggleShowcase />)
    expect(screen.getByText('Checkbox #06').closest('section')).toBeInTheDocument()
  })
})
