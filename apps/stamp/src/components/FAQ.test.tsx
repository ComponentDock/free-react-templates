import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders 3 questions', () => {
    render(<FAQ />)
    expect(
      screen.getByText(/Can you explain knowledge of the digital filing system/),
    ).toBeInTheDocument()
    expect(screen.getByText(/How do you approach a multi-step problem/)).toBeInTheDocument()
    expect(screen.getByText(/What technologies do you use for data analysis/)).toBeInTheDocument()
  })

  it('first item is expanded by default', () => {
    render(<FAQ />)
    const firstAnswer = screen.getByText(/Forth him herb stars/)
    expect(firstAnswer).toBeInTheDocument()
  })

  it('toggles items on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    // First item is open by default
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    // Click the second question to open it (first closes)
    await user.click(buttons[1]!)
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    // Click the second question again to collapse it
    await user.click(buttons[1]!)
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
  })
})
