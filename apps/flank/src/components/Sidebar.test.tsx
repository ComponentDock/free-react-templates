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

  it('renders the Flank logo', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Flank' })).toHaveAttribute('href', '#home')
  })

  it('renders all navigation items', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Portfolio/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/ })).toBeInTheDocument()
  })

  it('shows Home as active', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByRole('link', { name: /Home/ })
    expect(homeLink).toHaveClass('bg-sidebar-active')
  })

  it('expands Services dropdown', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const servicesLink = screen.getByRole('link', { name: /Services/ })

    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()

    await user.click(servicesLink)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
  })

  it('collapses Services dropdown on second click', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const servicesLink = screen.getByRole('link', { name: /Services/ })

    await user.click(servicesLink)
    expect(screen.getByText('Web Design')).toBeInTheDocument()

    await user.click(servicesLink)
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
  })

  it('clicking a non-expandable nav item does not expand dropdown', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const aboutLink = screen.getByRole('link', { name: /About/ })

    await user.click(aboutLink)
    // About has no children, so no dropdown should appear
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('handles email input and form submission', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const input = screen.getByLabelText('Email address for newsletter')

    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })

  it('does not clear email on empty submission', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const input = screen.getByLabelText('Email address for newsletter')

    // Submit with empty email
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    // Input should remain empty (no change)
    expect(input).toHaveValue('')
  })

  it('renders copyright with Component Dock link', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText(/© 2024 Flank/)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('applies hidden class when closed', () => {
    render(<Sidebar isOpen={false} onToggle={vi.fn()} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('applies visible class when open', () => {
    render(<Sidebar isOpen={true} onToggle={vi.fn()} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('calls onToggle when hamburger is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar isOpen={false} onToggle={onToggle} />)

    await user.click(screen.getByTestId('sidebar-toggle'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows overlay when open', () => {
    render(<Sidebar isOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('hides overlay when closed', () => {
    render(<Sidebar isOpen={false} onToggle={vi.fn()} />)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('calls onToggle when overlay is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar isOpen={true} onToggle={onToggle} />)

    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('does not render children initially for expandable items', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
    expect(screen.queryByText('Development')).not.toBeInTheDocument()
  })
})
