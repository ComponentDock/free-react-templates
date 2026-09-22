import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('hotel')).toBeInTheDocument()
    expect(screen.getByText('Belmont')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'About Us' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Rooms' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'News' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders Book Your Stay buttons', () => {
    render(<Navbar />)
    const bookButtons = screen.getAllByRole('button', { name: /book your stay/i })
    expect(bookButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on close click', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    expect(closeBtn).toBeInTheDocument()

    await user.click(closeBtn)
    const mobileOverlay = container.querySelector('.pointer-events-none')
    expect(mobileOverlay).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNavLinks = screen.getAllByRole('link', { name: 'Rooms' })
    // Click the mobile nav link (last one)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(mobileNavLinks[mobileNavLinks.length - 1]!)
    // Mobile menu overlay should be hidden (pointer-events-none)
    const mobileOverlay = container.querySelector('.pointer-events-none')
    expect(mobileOverlay).toBeInTheDocument()
  })

  it('renders five star icons in the brand area', () => {
    const { container } = render(<Navbar />)
    const stars = container.querySelectorAll('.flex.gap-0\\.5 svg')
    expect(stars.length).toBe(5)
  })
})
