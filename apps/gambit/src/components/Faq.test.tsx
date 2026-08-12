import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'
import { FAQS } from '../data'

describe('Faq', () => {
  it('renders six question rows', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Frequently Asked Questions')
    for (const item of FAQS) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    }
  })

  it('expands one answer at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0].question })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(FAQS[0].answer)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: FAQS[1].question }))
    expect(screen.getByRole('button', { name: FAQS[1].question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.queryByText(FAQS[0].answer)).not.toBeInTheDocument()
    expect(screen.getByText(FAQS[1].answer)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: FAQS[1].question }))
    expect(screen.getByRole('button', { name: FAQS[1].question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByText(FAQS[1].answer)).not.toBeInTheDocument()
  })
})
