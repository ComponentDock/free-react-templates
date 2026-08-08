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
      'How long does a typical construction project take?',
      'Do you handle permits and approvals?',
      'What types of projects do you build?',
      'How do you price a construction project?',
      'Do you offer warranties on your work?',
    ]
    for (const q of questions) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('expands an answer when its toggle is activated and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', {
      name: 'How long does a typical construction project take?',
    })
    expect(screen.queryByText(/Project timelines vary based on scope/)).not.toBeInTheDocument()

    await user.click(first)
    expect(screen.getByText(/Project timelines vary based on scope/)).toBeInTheDocument()

    await user.click(first)
    expect(screen.queryByText(/Project timelines vary based on scope/)).not.toBeInTheDocument()
  })
})
