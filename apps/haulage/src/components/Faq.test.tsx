import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Faq } from './Faq'
import { FAQ_ITEMS } from '../data'

describe('Faq', () => {
  it('renders the heading and every question/answer pair', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Ask Questions' }),
    ).toBeInTheDocument()

    /* The source demo repeats questions and lorem answers to fill the
       two-column grid, so query with getAllBy. */
    const questions = screen.getAllByRole('heading', { level: 3 })
    expect(questions).toHaveLength(FAQ_ITEMS.length)
    for (const item of FAQ_ITEMS) {
      expect(
        screen.getAllByRole('heading', { level: 3, name: item.question }).length,
      ).toBeGreaterThan(0)
      expect(screen.getAllByText(item.answer).length).toBeGreaterThan(0)
    }
  })
})
