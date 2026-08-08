import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all six questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Contact our support team/i)).toBeInTheDocument()

    for (const question of [
      'How long does it take to set up Dealflow?',
      'Can I import data from my existing CRM?',
      'What integrations does Dealflow support?',
      'Is my data secure with Dealflow?',
      'Do you offer a free trial?',
      'What kind of support is available?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses an answer on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const button = screen.getByRole('button', { name: 'Do you offer a free trial?' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/14-day free trial/i)).not.toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/14-day free trial/i)).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/14-day free trial/i)).not.toBeInTheDocument()
  })

  it('swaps the open accordion item when another question is clicked', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(
      screen.getByRole('button', { name: 'What integrations does Dealflow support?' }),
    )
    expect(screen.getByText(/200\+ tools including Gmail/i)).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Can I import data from my existing CRM?' }),
    )
    expect(screen.getByText(/imports from Salesforce, HubSpot/i)).toBeInTheDocument()
    expect(screen.queryByText(/200\+ tools including Gmail/i)).not.toBeInTheDocument()
  })
})
