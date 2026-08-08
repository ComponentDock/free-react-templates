import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five accordion items with the first open', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    const toggles = screen.getAllByRole('button')
    expect(toggles).toHaveLength(5)
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/1–2 weeks ahead/i)).toBeInTheDocument()
  })

  it('toggles an item open and closed', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstToggle = screen.getAllByRole('button')[0]!
    await user.click(firstToggle)
    expect(firstToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstToggle)
    expect(firstToggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('opens another item independently', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const giftCardToggle = screen.getByRole('button', { name: /Do you sell gift cards\?/ })
    expect(giftCardToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(giftCardToggle)
    expect(giftCardToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/never expire/i)).toBeInTheDocument()
  })
})
