import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
  })

  it('renders all five questions', () => {
    render(<FAQ />)
    for (const q of [
      'What time is check-in and check-out?',
      'Does AzurePeak offer airport transfers?',
      'Is the resort pet-friendly?',
      'What dining options are available?',
      'Can I cancel or modify my reservation?',
    ]) {
      expect(screen.getByText(q)).toBeInTheDocument()
    }
  })

  it('has all answers hidden initially', () => {
    render(<FAQ />)
    expect(screen.queryByText(/Check-in is available from 3:00 PM/)).not.toBeInTheDocument()
    expect(screen.queryByText(/complimentary airport transfers/)).not.toBeInTheDocument()
  })

  it('expands a question on click and shows its answer', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstButton = screen.getByRole('button', {
      name: /What time is check-in and check-out\?/i,
    })
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Check-in is available from 3:00 PM/)).toBeInTheDocument()
  })

  it('collapses the question when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstButton = screen.getByRole('button', {
      name: /What time is check-in and check-out\?/i,
    })

    await user.click(firstButton)
    expect(screen.getByText(/Check-in is available from 3:00 PM/)).toBeInTheDocument()

    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Check-in is available from 3:00 PM/)).not.toBeInTheDocument()
  })

  it('only allows one question open at a time (controlled accordion)', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstButton = screen.getByRole('button', {
      name: /What time is check-in and check-out\?/i,
    })
    const secondButton = screen.getByRole('button', {
      name: /Does AzurePeak offer airport transfers\?/i,
    })

    // Open first
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Check-in is available from 3:00 PM/)).toBeInTheDocument()

    // Open second - first should close
    await user.click(secondButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.queryByText(/Check-in is available from 3:00 PM/)).not.toBeInTheDocument()
    expect(screen.getByText(/complimentary airport transfers/)).toBeInTheDocument()
  })

  it('renders subheading', () => {
    render(<FAQ />)
    expect(screen.getByText('Need Help?')).toBeInTheDocument()
  })
})
