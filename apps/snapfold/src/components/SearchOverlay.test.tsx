import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  const defaultProps = { isOpen: true, onClose: vi.fn() }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders when open', () => {
    render(<SearchOverlay {...defaultProps} />)
    expect(screen.getByRole('dialog', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search here...')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(<SearchOverlay isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog', { name: /search/i })).not.toBeInTheDocument()
  })

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay {...defaultProps} />)
    await user.keyboard('{Escape}')
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })

  it('focuses the input when opened', () => {
    render(<SearchOverlay {...defaultProps} />)
    expect(screen.getByPlaceholderText('Search here...')).toHaveFocus()
  })

  it('prevents default on form submit', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Search here...'), 'test')
    await user.keyboard('{Enter}')
    // Form should not cause navigation or error
    expect(screen.getByRole('dialog', { name: /search/i })).toBeInTheDocument()
  })

  it('does not call onClose when isOpen is false and Escape pressed', async () => {
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={false} onClose={onClose} />)
    await userEvent.setup().keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
