import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five accordion questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const buttons = screen.getAllByRole('button', { expanded: false })
    expect(buttons.length).toBe(5)
    expect(screen.getByText(/How does the design consultation work/)).toBeInTheDocument()
  })

  it('expands an answer when its toggle is activated and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const toggle = screen.getByRole('button', {
      name: /Can you work within my budget/,
    })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(/We are transparent about pricing from the first proposal/),
    ).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
