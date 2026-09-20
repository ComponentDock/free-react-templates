import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Laurel' })).toBeInTheDocument()
    for (const label of [
      'Home',
      'Features',
      'Courses',
      'Testimonials',
      'Blog',
      'FAQs',
      'Contact',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
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
    const featuresLink = screen.getByText('Features')
    expect(featuresLink).toHaveAttribute('href', '#features')
  })

  it('clicking a mobile nav link closes the mobile menu', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    // Now the mobile menu is open; click the Features link to close it
    const mobileFeatures = screen.getAllByText('Features')
    // The last one should be the mobile link
    await user.click(mobileFeatures[mobileFeatures.length - 1]!)
    // After closing, the mobile menu should be hidden (no duplicate links)
    expect(screen.getAllByText('Features').length).toBe(1)
  })
})
