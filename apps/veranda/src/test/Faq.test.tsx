import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { FAQS } from '../data'

describe('Faq', () => {
  it('renders five closed rows', () => {
    render(<Faq />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(FAQS.length)
    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('opens one row and closes the previous one', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const [first, second] = screen.getAllByRole('button')

    await user.click(first!)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('region', { name: FAQS[0]!.question })
    expect(panel).toHaveTextContent(FAQS[0]!.answer)

    await user.click(second!)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('region')).toHaveLength(1)

    await user.click(second!)
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })
})
