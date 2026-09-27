import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoadMore } from './LoadMore'

describe('LoadMore', () => {
  it('renders a load more button', () => {
    render(<LoadMore />)
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })

  it('handles click without error', async () => {
    const user = userEvent.setup()
    render(<LoadMore />)
    const button = screen.getByRole('button', { name: /load more/i })
    await user.click(button)
  })
})
