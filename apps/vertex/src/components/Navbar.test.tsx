import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Vertex logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Vertex')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: /crafters/i })).toHaveAttribute('href', '#crafters')
    expect(screen.getByRole('link', { name: /stories/i })).toHaveAttribute('href', '#stories')
    expect(screen.getByRole('link', { name: /offer/i })).toHaveAttribute('href', '#offer')
    expect(screen.getByRole('link', { name: /expertise/i })).toHaveAttribute('href', '#expertise')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('has accessible navigation label', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toBeInTheDocument()

    // Mobile menu not visible initially (desktop links hidden)
    await user.click(toggle)

    // Mobile menu should be visible now
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click close
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Click a mobile link (the second occurrence of "Home" link)
    const links = screen.getAllByRole('link', { name: /home/i })
    // The mobile link is the second one
    await user.click(links[1]!)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
