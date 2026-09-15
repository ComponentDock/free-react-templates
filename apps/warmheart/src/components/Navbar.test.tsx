import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Warmheart')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'Gallery', 'About', 'Events', 'Pages', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders Donate Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Donate Now')).toHaveAttribute('href', '#donate')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const mobileMenu = container.querySelector('div.md\\:hidden') as HTMLElement
    const aboutLink = within(mobileMenu).getByText('About')
    await user.click(aboutLink)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when Donate Now is clicked in mobile menu', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const mobileMenu = container.querySelector('div.md\\:hidden') as HTMLElement
    // The mobile Donate Now is inside the mobile menu, not the desktop one
    const donateBtn = within(mobileMenu).getByText('Donate Now')
    await user.click(donateBtn)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
