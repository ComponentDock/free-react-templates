import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Sidebar } from './Sidebar'

const defaultProps = {
  activeFilter: 'All' as const,
  onFilterChange: vi.fn(),
  isOpen: false,
  onToggle: vi.fn(),
  onClose: vi.fn(),
}

describe('Sidebar', () => {
  it('renders the brand name', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Weft')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders filter options', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Filter By:')).toBeInTheDocument()
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
  })

  it('calls onFilterChange when a filter is clicked', async () => {
    const user = userEvent.setup()
    const onFilterChange = vi.fn()
    render(<Sidebar {...defaultProps} onFilterChange={onFilterChange} />)
    await user.click(screen.getByText('Branding'))
    expect(onFilterChange).toHaveBeenCalledWith('Branding')
  })

  it('renders social media icon links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('renders Component Dock copyright link', () => {
    render(<Sidebar {...defaultProps} />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('calls onToggle when hamburger button is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} onToggle={onToggle} />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(onToggle).toHaveBeenCalled()
  })

  it('shows close icon when sidebar is open', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('does not show close icon when sidebar is closed', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
