import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    darkMode: false,
    onToggleDark: vi.fn(),
    activeSection: 'home',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders author name and role', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Ford Jock')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<Sidebar {...defaultProps} />)
    const navItems = [
      'Home',
      'About',
      'Services',
      'Skills',
      'Education',
      'Experience',
      'Work',
      'Blog',
      'Contact',
    ]
    for (const item of navItems) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('highlights the active section', () => {
    render(<Sidebar {...defaultProps} activeSection="about" />)
    const aboutLink = screen.getByText('About')
    expect(aboutLink.className).toContain('bg-brand/10')
  })

  it('renders social media links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('calls onToggleDark when dark mode button is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(button)
    expect(defaultProps.onToggleDark).toHaveBeenCalledTimes(1)
  })

  it('shows "Light Mode" when darkMode is true', () => {
    render(<Sidebar {...defaultProps} darkMode={true} />)
    expect(screen.getByText('Light Mode')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    await user.click(screen.getByLabelText('Open menu'))
    const overlay = document.querySelector('.fixed.inset-0.z-30')!
    await user.click(overlay)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByText('About'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByAltText('Ford Jock')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText(/©.*Ford Jock/)).toBeInTheDocument()
  })
})
