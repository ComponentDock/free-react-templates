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
      'Do you accept dental insurance?',
      'What should I expect during my first visit?',
      'Do you offer emergency dental services?',
      'Is teeth whitening safe?',
      'At what age should children first visit the dentist?',
    ]
    for (const q of questions) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('expands an answer when its toggle is activated and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Do you accept dental insurance?' })
    expect(
      screen.queryByText(/We accept most major dental insurance plans/),
    ).not.toBeInTheDocument()

    await user.click(first)
    expect(screen.getByText(/We accept most major dental insurance plans/)).toBeInTheDocument()

    await user.click(first)
    expect(
      screen.queryByText(/We accept most major dental insurance plans/),
    ).not.toBeInTheDocument()
  })
})
