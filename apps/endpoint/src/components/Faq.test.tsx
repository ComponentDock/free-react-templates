import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five accordion questions', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const questions = [
      'How quickly can I get started with Endpoint?',
      'What protocols does the API Gateway support?',
      'How does pricing scale with API volume?',
      'Can I import my existing API into Endpoint?',
      'What kind of support do you offer?',
    ]
    for (const q of questions) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('expands an answer when its toggle is activated and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', {
      name: 'How quickly can I get started with Endpoint?',
    })
    expect(
      screen.queryByText(/make your first API call in under 5 minutes/),
    ).not.toBeInTheDocument()

    await user.click(first)
    expect(screen.getByText(/make your first API call in under 5 minutes/)).toBeInTheDocument()

    await user.click(first)
    expect(
      screen.queryByText(/make your first API call in under 5 minutes/),
    ).not.toBeInTheDocument()
  })
})
