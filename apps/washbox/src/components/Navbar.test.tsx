import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('WashBox')).toBeInTheDocument()
  })

  it('renders phone CTA on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('10 (87) 256-2903')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('adds sticky class on scroll', () => {
    render(<Navbar />)
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
  })

  it('renders scrolled mobile icon color when scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
