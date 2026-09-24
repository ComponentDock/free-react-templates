import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Medwell')).toBeInTheDocument()
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    const mobileMenu = document.getElementById('mobile-menu')
    expect(mobileMenu).toHaveClass('block')
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.getElementById('mobile-menu')).toHaveClass('block')
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileAbout = aboutLinks[1]
    expect(mobileAbout).toBeDefined()
    await user.click(mobileAbout!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('applies scrolled styles after scrolling', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    // Before scroll: transparent bg
    expect(nav).toHaveClass('bg-transparent')
    // Trigger scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    // After scroll: white bg with shadow
    expect(nav).toHaveClass('bg-white')
    expect(nav).toHaveClass('shadow-md')
  })

  it('has sticky nav class', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toHaveClass('sticky')
  })
})
