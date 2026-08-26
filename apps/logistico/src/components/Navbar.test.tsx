import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Logistico/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /News/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders phone number on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText(/\+1 \(232\) 323-5324/)).toBeInTheDocument()
  })

  it('opens mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openBtn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(openBtn)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on close button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByRole('button', { name: /Close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileLinks = screen.getAllByRole('link', { name: /About/i })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.queryByRole('button', { name: /Close menu/i })).not.toBeInTheDocument()
  })

  it('adds background on scroll', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    fireEvent.scroll(window)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-dark/95')
  })
})
