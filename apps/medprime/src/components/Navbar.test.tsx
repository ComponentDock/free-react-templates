import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Medprime')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Book Appointment button', () => {
    render(<Navbar />)

    expect(screen.getAllByText('Book Appointment').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle navigation menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle navigation menu')
    await user.click(toggle)

    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThan(1)
    const mobileAbout = aboutLinks[aboutLinks.length - 1]
    if (mobileAbout) {
      await user.click(mobileAbout)
    }

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('scrolls to appointment section when desktop Book Appointment is clicked', async () => {
    const user = userEvent.setup()
    const appointmentSection = document.createElement('div')
    appointmentSection.id = 'appointment'
    document.body.appendChild(appointmentSection)

    render(<Navbar />)

    const desktopBtn = document.querySelector('.hidden.lg\\:block button')
    if (desktopBtn) {
      await user.click(desktopBtn as HTMLElement)
      expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
    }

    document.body.removeChild(appointmentSection)
  })

  it('scrolls and closes menu when mobile Book Appointment is clicked', async () => {
    const user = userEvent.setup()
    const appointmentSection = document.createElement('div')
    appointmentSection.id = 'appointment'
    document.body.appendChild(appointmentSection)

    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle navigation menu')
    await user.click(toggle)

    const mobileNav = screen.getByLabelText('Mobile navigation')
    const mobileButtons = Array.from(mobileNav.querySelectorAll('button'))
    const bookBtn = mobileButtons[0]
    if (bookBtn) {
      await user.click(bookBtn)
      expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
    }

    document.body.removeChild(appointmentSection)
  })
})
