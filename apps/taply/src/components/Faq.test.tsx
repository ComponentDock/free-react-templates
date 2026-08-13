import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('shows the heading and the first answer by default', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Frequently Asked Questions',
    )
    // Scope to the open panel — all four answers share identical lorem text.
    const openPanel = screen.getByRole('region', { name: faqs[0]!.question })
    expect(within(openPanel).getByText(faqs[0]!.answer)).toBeInTheDocument()
  })

  it('expands and collapses panels', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const second = screen.getByRole('button', { name: faqs[1]!.question })
    expect(second).toHaveAttribute('aria-expanded', 'false')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: faqs[1]!.question })).toBeVisible()

    // Opening another panel closes the first one (single-open accordion).
    const third = screen.getByRole('button', { name: faqs[2]!.question })
    await user.click(third)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(third).toHaveAttribute('aria-expanded', 'true')

    await user.click(third)
    expect(third).toHaveAttribute('aria-expanded', 'false')
  })
})
