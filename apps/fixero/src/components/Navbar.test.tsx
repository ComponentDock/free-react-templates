import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Fixero')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByRole('button', { name: /🌙/i })
    await user.click(toggleBtn)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles mobile menu and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[1]!)

    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('toggles dark mode from mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    const mobileDarkBtn = screen.getByText('🌙 Dark mode')
    await user.click(mobileDarkBtn)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('applies scrolled class when scrolled past threshold', async () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    await act(async () => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-black/90')
  })
})
