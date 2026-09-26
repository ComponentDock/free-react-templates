import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('photonic')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Navbar />)
    expect(screen.getAllByLabelText('Facebook').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Instagram').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Youtube').length).toBeGreaterThanOrEqual(1)
  })

  it('shows dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const photoLink = screen.getByText('Photography')
    await user.hover(photoLink)
    expect(screen.getByText('Nature')).toBeInTheDocument()
    expect(screen.getByText('Portrait')).toBeInTheDocument()
    expect(screen.getByText('Wedding')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const photoLink = screen.getByText('Photography')
    await user.hover(photoLink)
    expect(screen.getByText('Nature')).toBeInTheDocument()
    await user.unhover(photoLink)
    expect(screen.queryByText('Nature')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when link clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const mobileLinks = screen.getAllByText('Home')
    const lastLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(lastLink)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
