import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the CureNova logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Cure')).toBeInTheDocument()
    expect(screen.getByText('Nova')).toBeInTheDocument()
  })

  it('shows phone number in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 (800) 254-9876')).toBeInTheDocument()
  })

  it('shows address in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('123 Health Avenue, Medical City')).toBeInTheDocument()
  })

  it('shows social media links in top bar', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders main navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Doctors')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Departments')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    // Click the Doctors link in the mobile menu (second occurrence)
    const mobileLinks = screen.getAllByText('Doctors')
    await user.click(mobileLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
