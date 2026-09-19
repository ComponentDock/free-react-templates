import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Learnwise' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'Courses', 'Instructors', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders Register and Login buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // There are two "Courses" links (desktop hidden + mobile visible); click the visible one
    const coursesLinks = screen.getAllByRole('link', { name: 'Courses' })
    const lastCourse = coursesLinks.at(-1)
    if (lastCourse) await user.click(lastCourse)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
