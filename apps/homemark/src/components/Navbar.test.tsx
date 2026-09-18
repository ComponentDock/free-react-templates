import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('HOMESTEAD').length).toBeGreaterThanOrEqual(1)
    // Desktop nav has the links
    const desktopNav = screen.getByLabelText('Main navigation')
    expect(desktopNav.querySelectorAll('a')).toHaveLength(6)
    expect(desktopNav).toHaveTextContent('Home')
    expect(desktopNav).toHaveTextContent('About Us')
    expect(desktopNav).toHaveTextContent('Property')
    expect(desktopNav).toHaveTextContent('Developments')
    expect(desktopNav).toHaveTextContent('News')
    expect(desktopNav).toHaveTextContent('Contact')
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Mobile nav links are in a separate nav element
    const mobileNav = screen.getByLabelText('Mobile navigation')
    const homeLink = mobileNav.querySelectorAll('a')[0]!
    await user.click(homeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
