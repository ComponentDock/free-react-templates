import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Review } from './Review'

describe('Review', () => {
  it('shows the quote icon, review text and author name', () => {
    render(<Review />)
    expect(
      screen.getByText(/Bitcoin is exciting because it shows how cheap it can be/i, {
        selector: 'p',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jackson Nash' })).toBeInTheDocument()
  })

  it('cycles testimonials with the arrow controls', async () => {
    const user = userEvent.setup()
    render(<Review />)
    expect(screen.getByText('Jackson Nash')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByText('Satoshi Nakamoto')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByText('Jackson Nash')).toBeInTheDocument()
  })
})
