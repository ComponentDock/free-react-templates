import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Odonto')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    const mobileDoctorsLinks = screen.getAllByText('Doctors')
    expect(mobileDoctorsLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const blogLinks = screen.getAllByText('Blog')
    await user.click(blogLinks[blogLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when the appointment CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctaLinks = screen.getAllByText('Make an Appointment')
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
