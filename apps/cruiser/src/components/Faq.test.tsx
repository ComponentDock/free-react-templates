import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the section heading', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 2, name: 'Frequently Asked' })).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<Faq />)

    const questions = [
      'Do I need my own equipment?',
      'What age groups do you accommodate?',
      'How do I book a coaching session?',
      'Do you offer injury recovery support?',
      'Is there a trial period?',
      'What skatespots do you cover?',
      'Can I bring friends to group sessions?',
      'Do you host competitions?',
    ]
    for (const q of questions) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('starts with all answers hidden', () => {
    render(<Faq />)
    expect(screen.queryByText(/We provide beginner gear/)).not.toBeInTheDocument()
  })

  it('toggles FAQ open and closed on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const firstQuestion = screen.getByRole('button', {
      name: 'Do I need my own equipment?',
    })

    // Open
    await user.click(firstQuestion)
    expect(screen.getByText(/We provide beginner gear/)).toBeInTheDocument()

    // Close
    await user.click(firstQuestion)
    expect(screen.queryByText(/We provide beginner gear/)).not.toBeInTheDocument()
  })

  it('opens different FAQ items independently', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const q1 = screen.getByRole('button', {
      name: 'Do I need my own equipment?',
    })
    const q2 = screen.getByRole('button', {
      name: 'What age groups do you accommodate?',
    })

    await user.click(q1)
    expect(screen.getByText(/We provide beginner gear/)).toBeInTheDocument()

    await user.click(q2)
    // First answer should close, second should open
    expect(screen.queryByText(/We provide beginner gear/)).not.toBeInTheDocument()
    expect(screen.getByText(/from kids as young as 6/)).toBeInTheDocument()
  })
})
