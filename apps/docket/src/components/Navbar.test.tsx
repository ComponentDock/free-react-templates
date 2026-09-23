import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Docket')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Practice Areas', 'Cases', 'Attorneys', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders desktop nav links with correct anchors', () => {
    render(<Navbar />)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Practice Areas').closest('a')).toHaveAttribute(
      'href',
      '#practice-areas',
    )
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    // Mobile nav links appear
    const mobileNav = screen.getByLabelText('Main navigation').querySelector('.lg\\:hidden')
    expect(mobileNav).toBeInTheDocument()

    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (the second one, since first set is desktop)
    const mobileLinks = screen.getAllByText('About')
    // The last "About" should be in the mobile menu
    const mobileAboutLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileAboutLink)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
