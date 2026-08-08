import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all five questions', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()

    for (const question of [
      'Can I freeze my membership?',
      'Do you offer personal training?',
      'What group classes do you offer?',
      'Is there a locker room with showers?',
      'Can I bring a guest?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses answers', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Can I freeze my membership?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/freeze your membership for up to 3 months/)).toBeInTheDocument()
  })

  it('only opens one question at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const second = screen.getByRole('button', { name: 'Do you offer personal training?' })
    await user.click(second)

    expect(screen.getByRole('button', { name: 'Can I freeze my membership?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
