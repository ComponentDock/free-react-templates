import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /cognita/i })).toBeInTheDocument()

    for (const link of ['Home', 'Courses', 'About', 'Events', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Join Now CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    // Click the mobile Courses link
    const coursesLinks = screen.getAllByText('Courses')
    // Use the last one (mobile version)
    const lastCoursesLink = coursesLinks.at(-1)
    expect(lastCoursesLink).toBeDefined()
    await user.click(lastCoursesLink!)

    // Menu should be closed
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
