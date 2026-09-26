import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links in primary nav', () => {
    render(<Navbar />)
    const primaryNav = screen.getByLabelText('Primary')
    const links = within(primaryNav).getAllByRole('link')
    expect(links).toHaveLength(6)
    expect(within(primaryNav).getByText('Home')).toBeInTheDocument()
    expect(within(primaryNav).getByText('About')).toBeInTheDocument()
    expect(within(primaryNav).getByText('Services')).toBeInTheDocument()
    expect(within(primaryNav).getByText('Portfolio')).toBeInTheDocument()
    expect(within(primaryNav).getByText('Blog')).toBeInTheDocument()
    expect(within(primaryNav).getByText('Contact')).toBeInTheDocument()
  })

  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Velox').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toHaveClass('block')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile')
    const aboutLink = within(mobileNav).getByText('About')
    await user.click(aboutLink)
    // jsdom does not compute CSS — check the class toggle instead
    expect(mobileNav).toHaveClass('hidden')
  })
})
