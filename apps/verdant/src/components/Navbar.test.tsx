import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /verdant/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('highlights active link on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const aboutLink = screen.getByRole('link', { name: /about/i })
    await user.click(aboutLink)
    expect(aboutLink).toHaveClass('text-brand')
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    // Initially only desktop nav exists
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    // Toggle open — mobile nav should appear
    await user.click(toggle)
    const navs = screen.getAllByRole('navigation')
    expect(navs).toHaveLength(2)
    expect(navs[1]).toBeVisible()
    // Toggle close
    await user.click(toggle)
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getAllByRole('navigation')).toHaveLength(2)
    // Click a mobile nav link — it should close the menu
    const mobileAbout = screen.getAllByRole('link', { name: /about/i })[1]
    await user.click(mobileAbout)
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
  })
})
