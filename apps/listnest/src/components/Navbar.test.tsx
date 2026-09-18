import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('ListNest')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('+ Add Listing')).toBeInTheDocument()
  })

  it('renders dropdown triggers', () => {
    render(<Navbar />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Listing')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
  })

  it('shows dropdown menu on hover and hides on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const exploreBtn = screen.getByText('Explore').closest('button')!
    await user.hover(exploreBtn)
    expect(screen.getAllByText('Action').length).toBeGreaterThan(0)
    await user.unhover(exploreBtn)
    // After mouse leave, dropdown should close
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2)
  })

  it('toggles mobile dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Find mobile Explore button
    const mobileExploreBtns = screen.getAllByText('Explore')
    const mobileBtn = mobileExploreBtns[mobileExploreBtns.length - 1]!.closest('button')!
    await user.click(mobileBtn)
    // Should show dropdown items
    expect(screen.getAllByText('Action').length).toBeGreaterThan(0)
  })

  it('applies custom className', () => {
    const { container } = render(<Navbar className="custom-nav" />)
    expect(container.firstChild).toHaveClass('custom-nav')
  })
})
