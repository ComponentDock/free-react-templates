import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the eyebrow, heading, four collapsed questions and the booking CTA', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Full range of travel service' }),
    ).toBeInTheDocument()

    const questions = screen.getAllByRole('button', { expanded: false })
    expect(questions).toHaveLength(4)
    expect(
      screen.getByRole('button', { name: 'Starts the automated process.' }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Duis cursus/)).not.toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Book Your Destination' })
    expect(cta).toHaveAttribute('href', '#events')
    expect(cta).toHaveClass('bg-brand')
  })

  it('expands one answer at a time and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Starts the automated process.' })
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Duis cursus/)).toBeInTheDocument()

    const third = screen.getByRole('button', { name: 'Automated process starts.' })
    await user.click(third)
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/a local leader is matched/i)).toBeInTheDocument()
    expect(screen.queryByText(/Duis cursus/)).not.toBeInTheDocument()

    await user.click(third)
    expect(third).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/a local leader is matched/i)).not.toBeInTheDocument()
  })
})
