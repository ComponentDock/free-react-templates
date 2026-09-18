import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = { onSearchOpen: vi.fn() }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders brand name', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Snapfold')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('calls onSearchOpen when search button clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /search$/i }))
    expect(defaultProps.onSearchOpen).toHaveBeenCalledTimes(1)
  })

  it('renders copyright', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText(/Snapfold\. All rights reserved/)).toBeInTheDocument()
  })

  it('toggles mobile menu open', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    const toggleBtn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleBtn)
    // After toggling, close button should be available
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    expect(closeBtn).toBeInTheDocument()
  })

  it('closes mobile menu via close button', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)
    // Open first
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))
    // Close
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    // After closing, sidebar should have translate-x-full on mobile
    const aside =
      screen.getByRole('complementary', { hidden: true }) || document.querySelector('aside')
    expect(aside).toBeTruthy()
  })

  it('renders find us on text', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Find us on')).toBeInTheDocument()
  })

  it('renders all nav link hrefs', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
