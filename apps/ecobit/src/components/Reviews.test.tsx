import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the first quote with its attribution', () => {
    render(<Reviews />)

    expect(screen.queryByText(/paid for itself in the first month/)).not.toBeInTheDocument()
    const figure = screen.getByRole('figure', { name: 'Mitchel Jeferson' })
    expect(figure.textContent).toMatch(/CEO of softking/)
    expect(figure.textContent).toMatch(/With efficiency to unlock more opportunities/)
  })

  it('navigates between quotes with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    const firstQuote = screen.getByRole('figure', { name: 'Mitchel Jeferson' })
    expect(firstQuote.textContent).toMatch(/Saw shall light/)

    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByRole('figure', { name: 'Olivia Bennett' }).textContent).toMatch(
      /paid for itself in the first month/,
    )

    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByRole('figure', { name: 'Mitchel Jeferson' }).textContent).toMatch(
      /Saw shall light/,
    )

    await user.click(screen.getByRole('button', { name: 'Go to review 3' }))
    expect(screen.getByRole('figure', { name: 'Daniel Reyes' }).textContent).toMatch(
      /cleanest onboarding/,
    )
  })
})
