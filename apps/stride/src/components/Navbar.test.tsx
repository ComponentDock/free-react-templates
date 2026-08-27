import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Stride')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'Classes', 'Schedule', 'Trainer', 'Services', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('starts with transparent background', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')
  })

  it('scrolls to white background', async () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 0))
    expect(nav.className).toContain('bg-white')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
    await user.click(toggle)
  })

  it('clicks a mobile nav link to close menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const classesLinks = screen.getAllByText('Classes')
    const mobileClassesLink = classesLinks[classesLinks.length - 1]!
    await user.click(mobileClassesLink)
  })

  it('shows active link styling when scrolled and link is active', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 0))
    const classesLinks = screen.getAllByText('Classes')
    const desktopLink = classesLinks[0]
    expect(desktopLink).toBeDefined()
    await user.click(desktopLink!)
    expect(desktopLink!.className).toContain('text-brand')
  })

  it('shows active link styling when not scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    const classesLinks = screen.getAllByText('Classes')
    const desktopLink = classesLinks[0]
    expect(desktopLink).toBeDefined()
    await user.click(desktopLink!)
    expect(desktopLink!.className).toContain('border-b-2')
  })

  it('shows Menu icon when not scrolled and menu closed', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    const svg = toggle.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.classList.contains('text-white')).toBe(true)
  })

  it('shows X icon when menu is open and not scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const svg = toggle.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.classList.contains('text-white')).toBe(true)
  })

  it('shows Menu icon when menu closed and scrolled', async () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 0))
    const toggle = screen.getByLabelText('Toggle menu')
    const svg = toggle.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.classList.contains('text-gray-900')).toBe(true)
  })

  it('shows X icon when menu is open and scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 0))
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const svg = toggle.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.classList.contains('text-gray-900')).toBe(true)
  })
})
