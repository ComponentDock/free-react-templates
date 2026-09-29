import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    isOpen: false,
    onToggle: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the brand name', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Panelbar')).toBeInTheDocument()
  })

  it('renders the brand link pointing to home', () => {
    render(<Sidebar {...defaultProps} />)
    const link = screen.getByText('Panelbar')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '#home')
  })

  it('renders all six navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Homepage')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Friends')).toBeInTheDocument()
    expect(screen.getByText('Subscription')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Information')).toBeInTheDocument()
  })

  it('marks the first nav item as active', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByText('Homepage').closest('a')
    expect(homeLink).toHaveClass('text-sidebar-active')
  })

  it('renders nav links with correct hrefs', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Homepage').closest('a')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', '#dashboard')
    expect(screen.getByText('Friends').closest('a')).toHaveAttribute('href', '#friends')
    expect(screen.getByText('Subscription').closest('a')).toHaveAttribute('href', '#subscription')
    expect(screen.getByText('Settings').closest('a')).toHaveAttribute('href', '#settings')
    expect(screen.getByText('Information').closest('a')).toHaveAttribute('href', '#information')
  })

  it('is hidden on mobile when isOpen is false', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('is visible on mobile when isOpen is true', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('shows overlay when isOpen is true', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('does not show overlay when isOpen is false', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('calls onToggle when overlay is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} isOpen={true} onToggle={onToggle} />)
    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onToggle when sidebar toggle button is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} onToggle={onToggle} />)
    await user.click(screen.getByTestId('desktop-toggle'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('renders sidebar with correct aria label', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('navigation', { name: 'Sidebar navigation' })).toBeInTheDocument()
  })

  it('renders sidebar with 250px width', () => {
    render(<Sidebar {...defaultProps} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('w-[250px]')
  })
})
