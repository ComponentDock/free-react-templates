import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders four apartment cards with their stats', () => {
    render(<Gallery />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getAllByRole('img')).toHaveLength(4)
    expect(screen.getAllByText('04 beds')).toHaveLength(4)
    expect(screen.getAllByText('03 baths')).toHaveLength(4)
    expect(screen.getAllByText('2400 sqft')).toHaveLength(4)
    expect(screen.getByText('Luxuries')).toBeInTheDocument()
    expect(screen.getByText('Apartment')).toBeInTheDocument()
  })

  it('toggles a like on one card without touching the others', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const like = screen.getByRole('button', { name: 'Like Riverside Duplex' })
    expect(like).toHaveAttribute('aria-pressed', 'false')
    expect(like.textContent).toBe('Like')

    await user.click(like)
    const liked = screen.getByRole('button', { name: 'Unlike Riverside Duplex' })
    expect(liked).toHaveAttribute('aria-pressed', 'true')
    expect(liked.textContent).toBe('Liked')
    expect(screen.getByRole('button', { name: 'Like Old Town Loft' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    await user.click(liked)
    expect(screen.getByRole('button', { name: 'Like Riverside Duplex' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})
