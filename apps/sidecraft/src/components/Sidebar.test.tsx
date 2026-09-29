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

  it('renders the logo text', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Splash')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Home without dropdown arrow and Pages with dropdown', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByText('Home').closest('a')
    const pagesLink = screen.getByText('Pages').closest('a')
    expect(homeLink).not.toHaveAttribute('aria-expanded')
    expect(pagesLink).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles dropdown on Pages click showing submenu items', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const pagesLink = screen.getByText('Pages').closest('a')!
    expect(screen.queryByText('Services')).not.toBeInTheDocument()

    await user.click(pagesLink)
    expect(pagesLink).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()

    await user.click(pagesLink)
    expect(pagesLink).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Services')).not.toBeInTheDocument()
  })

  it('renders newsletter subscription section', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Subscribe for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const emailInput = screen.getByLabelText('Email address for newsletter')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    expect(emailInput).toHaveValue('')
  })

  it('does not clear email if empty on submit', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    expect(screen.getByLabelText('Email address for newsletter')).toHaveValue('')
  })

  it('clicks a non-dropdown link without error', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const aboutLink = screen.getByText('About').closest('a')!
    await user.click(aboutLink)
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('renders copyright text', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
    expect(screen.getByText(/2019 All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock in copyright', () => {
    render(<Sidebar {...defaultProps} />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('calls onToggle when hamburger is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar isOpen={false} onToggle={onToggle} />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    await user.click(toggleBtn)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('hides sidebar when closed on mobile', () => {
    render(<Sidebar isOpen={false} onToggle={defaultProps.onToggle} />)
    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full')
  })

  it('shows sidebar when open', () => {
    render(<Sidebar isOpen={true} onToggle={defaultProps.onToggle} />)
    expect(screen.getByTestId('sidebar')).toHaveClass('translate-x-0')
  })

  it('shows overlay when open and closes on overlay click', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar isOpen={true} onToggle={onToggle} />)
    const overlay = screen.getByTestId('sidebar-overlay')
    await user.click(overlay)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('does not show overlay when closed', () => {
    render(<Sidebar isOpen={false} onToggle={defaultProps.onToggle} />)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('Home link navigates to #home on click', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByText('Home').closest('a')!
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('About link navigates to #about', () => {
    render(<Sidebar {...defaultProps} />)
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('Portfolio link navigates to #portfolio', () => {
    render(<Sidebar {...defaultProps} />)
    const portfolioLink = screen.getByText('Portfolio').closest('a')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')
  })

  it('Contact link navigates to #contact', () => {
    render(<Sidebar {...defaultProps} />)
    const contactLink = screen.getByText('Contact').closest('a')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
})
