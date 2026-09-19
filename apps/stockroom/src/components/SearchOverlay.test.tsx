import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('does not render when closed', () => {
    render(<SearchOverlay isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByPlaceholderText('Type your keyword...')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
  })

  it('renders search input and close button', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
    expect(screen.getByLabelText('Close search')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)
    await user.click(screen.getByLabelText('Close search'))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
