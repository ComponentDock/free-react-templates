import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqItems } from '../data'

describe('Faq', () => {
  it('renders the heading and four collapsed questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Frequently Ask' })).toBeInTheDocument()
    for (const item of faqItems) {
      const button = screen.getByRole('button', { name: new RegExp(item.question) })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByText(faqItems[0]!.answer)).not.toBeInTheDocument()
  })

  it('expands a question to reveal its answer and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstButton = screen.getByRole('button', { name: new RegExp(faqItems[0]!.question) })
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('region', { name: new RegExp(faqItems[0]!.question) })
    expect(within(panel).getByText(faqItems[0]!.answer)).toBeInTheDocument()
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})
