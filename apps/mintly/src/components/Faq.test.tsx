import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqItems } from '../data'

describe('Faq', () => {
  it('renders the heading and every question', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    for (const item of faqItems) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    }
  })

  it('opens one item at a time and toggles aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const firstQuestion = faqItems[0]?.question ?? ''
    const secondQuestion = faqItems[1]?.question ?? ''
    const first = screen.getByRole('button', { name: firstQuestion })
    const second = screen.getByRole('button', { name: secondQuestion })

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(faqItems[1]?.answer ?? '')).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })
})
