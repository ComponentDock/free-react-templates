import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

const questions = [
  'What frameworks and languages does Stratos support?',
  'How does pricing work?',
  'What is your uptime guarantee?',
  'Can I migrate from my current provider?',
  'How do you handle security and compliance?',
]

describe('Faq', () => {
  it('renders the heading, subtext, and all five questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
    expect(screen.queryByText(/SOC 2 Type II certified/)).not.toBeInTheDocument()
  })

  it('expands a question when pressed and collapses a previously expanded one', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: questions[0]! })
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Stratos supports all major frameworks/)).toBeInTheDocument()

    const second = screen.getByRole('button', { name: questions[1]! })
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/Paid plans start at \$20\/month/)).toBeInTheDocument()
    expect(screen.queryByText(/Stratos supports all major frameworks/)).not.toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Paid plans start at \$20\/month/)).not.toBeInTheDocument()
  })
})
