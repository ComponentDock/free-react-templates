import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five question items', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How quickly can Aegis be deployed?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Does Aegis replace our existing SIEM?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'What is your false positive rate?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Do you offer 24/7 managed detection and response?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How does Aegis protect against zero-day attacks?' }),
    ).toBeInTheDocument()
  })

  it('opens the first item by default and collapses it on activation', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', {
      name: 'How quickly can Aegis be deployed?',
    })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/as little as 24 hours/)).toBeInTheDocument()
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/as little as 24 hours/)).not.toBeInTheDocument()
  })

  it('swaps the open item when another is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(screen.getByRole('button', { name: 'What is your false positive rate?' }))
    expect(
      screen.getByRole('button', { name: 'What is your false positive rate?' }),
    ).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/0.001% false positive rate/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How quickly can Aegis be deployed?' }),
    ).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/as little as 24 hours/)).not.toBeInTheDocument()
  })
})
