import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    isOpen: false,
    onToggle: vi.fn(),
  }

  it('renders logo and navigation items', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('M.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contacts/i })).toBeInTheDocument()
  })

  it('highlights the active nav item', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveClass('font-semibold')
  })

  it('calls onToggle when hamburger is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar isOpen={false} onToggle={onToggle} />)
    await user.click(screen.getByTestId('sidebar-toggle'))
    expect(onToggle).toHaveBeenCalledOnce()
  })

  it('shows overlay when sidebar is open', () => {
    render(<Sidebar isOpen={true} onToggle={defaultProps.onToggle} />)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('does not show overlay when sidebar is closed', () => {
    render(<Sidebar isOpen={false} onToggle={defaultProps.onToggle} />)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })
})
