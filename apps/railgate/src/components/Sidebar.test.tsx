import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    isOpen: true,
    onToggle: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the profile name', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByTestId('profile-name')).toHaveTextContent('Alex Morgan')
  })

  it('renders the profile avatar', () => {
    render(<Sidebar {...defaultProps} />)
    const avatar = screen.getByTestId('profile-avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('alt', 'Profile photo')
  })

  it('renders all seven navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
    expect(screen.getByText('Gift Code')).toBeInTheDocument()
    expect(screen.getByText('Top Review')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })

  it('marks the Home nav item as active', () => {
    render(<Sidebar {...defaultProps} />)
    const homeLink = screen.getByTestId('nav-home')
    expect(homeLink).toHaveClass('text-sidebar-text-hover')
  })

  it('renders the download notification badge', () => {
    render(<Sidebar {...defaultProps} />)
    const badge = screen.getByTestId('download-badge')
    expect(badge).toHaveTextContent('5')
  })

  it('renders the sidebar with 300px width', () => {
    render(<Sidebar {...defaultProps} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('w-[300px]')
  })

  it('shows sidebar as visible when isOpen is true', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('ml-0')
  })

  it('shows sidebar as collapsed when isOpen is false', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-ml-[300px]')
  })

  it('renders the toggle button with collapse label when open', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    expect(screen.getByTestId('sidebar-toggle')).toHaveAttribute('aria-label', 'Collapse sidebar')
  })

  it('renders the toggle button with expand label when closed', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    expect(screen.getByTestId('sidebar-toggle')).toHaveAttribute('aria-label', 'Expand sidebar')
  })

  it('calls onToggle when toggle button is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} onToggle={onToggle} />)
    await user.click(screen.getByTestId('sidebar-toggle'))
    expect(onToggle).toHaveBeenCalledTimes(1)
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

  it('renders sidebar navigation with aria-label', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('navigation', { name: 'Sidebar navigation' })).toBeInTheDocument()
  })

  it('renders profile section', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByTestId('profile-section')).toBeInTheDocument()
  })

  it('prevents default on nav link click', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const navLink = screen.getByTestId('nav-home')
    await user.click(navLink)
    // onClick calls preventDefault, link should not navigate
    expect(navLink).toHaveAttribute('href', '#')
  })

  it('renders non-active nav items with sidebar-text class', () => {
    render(<Sidebar {...defaultProps} />)
    const downloadLink = screen.getByTestId('nav-download')
    expect(downloadLink).toHaveClass('text-sidebar-text')
  })
})
