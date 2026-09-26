import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoadMore } from './LoadMore'

describe('LoadMore', () => {
  it('renders the load more button', () => {
    render(<LoadMore />)
    expect(screen.getByRole('button', { name: /load more items/i })).toBeInTheDocument()
  })

  it('button is clickable', async () => {
    const user = userEvent.setup()
    render(<LoadMore />)
    const button = screen.getByRole('button', { name: /load more items/i })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })
})
