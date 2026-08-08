import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the pill eyebrow, heading, and five questions', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const question of [
      'How far in advance should we book?',
      'What is your pricing structure?',
      'Do you travel for destination weddings?',
      'How involved will we be in the planning?',
      'What happens if it rains on our outdoor wedding?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
  })

  it('expands and collapses a question, revealing its answer', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'How far in advance should we book?' })
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/We recommend booking 12–18 months ahead/)).toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/We recommend booking 12–18 months ahead/)).not.toBeInTheDocument()
  })
})
