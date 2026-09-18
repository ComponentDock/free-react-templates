import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /Frequently ask/i })).toBeInTheDocument()
  })

  it('renders 3 accordion items', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('shows the first item expanded by default', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/comprehensive assessment of your business needs/)).toBeInTheDocument()
  })

  it('expands a collapsed item on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const buttons = screen.getAllByRole('button')

    // Click second item to expand
    await user.click(buttons[1]!)
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/multiple industries including finance/)).toBeInTheDocument()

    // Click third item to expand
    await user.click(buttons[2]!)
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Engagement timelines vary/)).toBeInTheDocument()
  })

  it('toggles first item off when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // First item is open by default, click to close
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[0]!)
    // Re-query to get fresh DOM state
    const freshButtons = screen.getAllByRole('button')
    expect(freshButtons[0]).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the illustration image', () => {
    render(<FAQ />)
    expect(screen.getByRole('img', { name: /FAQ illustration/i })).toBeInTheDocument()
  })
})
