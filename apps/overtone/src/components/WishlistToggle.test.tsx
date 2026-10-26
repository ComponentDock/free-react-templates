import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WishlistToggle } from './WishlistToggle'

describe('WishlistToggle', () => {
  it('starts unpressed and flips on every click', async () => {
    const user = userEvent.setup()
    render(<WishlistToggle />)

    const button = screen.getByRole('button', { name: 'Save to wishlist' })
    expect(button).toHaveAttribute('aria-pressed', 'false')

    await user.click(button)
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button.querySelector('.ot-heart')).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })
})
