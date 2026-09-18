import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading and all four questions', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /Frequently Ask Question/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What services does Techwise offer/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How long does a typical project take/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Do you work with startups/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What is your pricing structure/i }),
    ).toBeInTheDocument()
  })

  it('expands and collapses FAQ items on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const firstButton = screen.getByRole('button', {
      name: /What services does Techwise offer/i,
    })

    // Initially collapsed
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/comprehensive range of services/i)).not.toBeInTheDocument()

    // Expand
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/comprehensive range of services/i)).toBeInTheDocument()

    // Collapse
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/comprehensive range of services/i)).not.toBeInTheDocument()
  })

  it('expands only one FAQ at a time', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const first = screen.getByRole('button', { name: /What services/i })
    const second = screen.getByRole('button', { name: /How long/i })

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')

    await user.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
