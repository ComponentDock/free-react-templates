import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Port')).toBeInTheDocument()
    expect(screen.getByText('light')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link')
    const linkTexts = links.map((l) => l.textContent?.trim())
    expect(linkTexts).toContain('Home')
    expect(linkTexts).toContain('Our Rooms')
    expect(linkTexts).toContain('Restaurant')
    expect(linkTexts).toContain('About Us')
    expect(linkTexts).toContain('Contact')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click the mobile "Home" link (last one with name "Home")
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1])
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('applies scrolled class on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).not.toHaveClass('bg-black/90')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav).toHaveClass('bg-black/90')
  })
})
