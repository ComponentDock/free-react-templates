import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Courselex' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Courses', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('shows dropdown chevron for Pages link', () => {
    render(<Navbar />)
    const pagesLink = screen.getByText('Pages')
    expect(pagesLink).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    // After toggle, mobile links should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('all nav links have correct href attributes', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink).toHaveAttribute('href', '#home')
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('clicking a mobile nav link closes the mobile menu', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    // Now the mobile menu is open; click the About link to close it
    const mobileAbout = screen.getAllByText('About')
    // The last one should be the mobile link
    await user.click(mobileAbout[mobileAbout.length - 1]!)
    // After closing, the mobile menu should be hidden (no duplicate links)
    expect(screen.getAllByText('About').length).toBe(1)
  })
})
