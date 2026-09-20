import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo with Learn and Path text', () => {
    render(<Navbar />)

    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Path')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)

    for (const link of ['Home', 'About', 'Courses', 'Blog', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders cart icon', () => {
    render(<Navbar />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const coursesLinks = screen.getAllByText('Courses')
    const lastCoursesLink = coursesLinks.at(-1)
    expect(lastCoursesLink).toBeDefined()
    await user.click(lastCoursesLink!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('nav links have correct hrefs', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' }).getAttribute('href')).toBe('#home')
    expect(screen.getByRole('link', { name: 'About' }).getAttribute('href')).toBe('#about')
    expect(screen.getByRole('link', { name: 'Courses' }).getAttribute('href')).toBe('#courses')
  })
})
