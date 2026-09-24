import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { siteName, navItems, appointmentLabel } from '../data'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders the site name', () => {
    render(<Navbar />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
  })

  it('renders the appointment CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: appointmentLabel })).toBeInTheDocument()
  })

  it('toggles mobile navigation on menu click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/mobile navigation/i)).toBeInTheDocument()
  })

  it('closes mobile nav when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    // Click the mobile "About" link (second one)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileAboutLink = aboutLinks[1] ?? aboutLinks[0]!
    await user.click(mobileAboutLink)

    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })

  it('closes mobile nav when the appointment link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    // The mobile appointment link is the second one with that text
    const apptLinks = screen.getAllByRole('link', { name: appointmentLabel })
    const mobileApptLink = apptLinks[1] ?? apptLinks[0]!
    await user.click(mobileApptLink)

    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })
})
