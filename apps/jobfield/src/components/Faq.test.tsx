import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five collapsed questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const question of [
      'Is Jobfield free for job seekers?',
      'How do I post a job on Jobfield?',
      'How long does it take to get hired?',
      'Can I search for remote jobs specifically?',
      'How does the candidate matching work?',
    ]) {
      const button = screen.getByRole('button', { name: question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('expands a question to reveal its answer and rotates the chevron', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Is Jobfield free for job seekers?' })
    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(/Creating a profile, browsing jobs, and applying is completely free/),
    ).toBeInTheDocument()
  })

  it('collapses the question when clicked again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Is Jobfield free for job seekers?' })
    await user.click(first)
    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByText(/Creating a profile, browsing jobs, and applying is completely free/),
    ).toBeNull()
  })

  it('opens a different question while keeping the previous one closed', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: 'How do I post a job on Jobfield?' }))
    await user.click(
      screen.getByRole('button', { name: 'Can I search for remote jobs specifically?' }),
    )

    expect(
      screen.getByRole('button', { name: 'Can I search for remote jobs specifically?' }),
    ).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('button', { name: 'How do I post a job on Jobfield?' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })
})
