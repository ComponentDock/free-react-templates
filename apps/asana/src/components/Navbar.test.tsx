import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Asana')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Classes', 'Schedule', 'About', 'Events', 'Gallery', 'Contact']
    for (const label of links) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders contact info on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('info@asana.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 8910')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // Click a link to close
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const classLinks = screen.getAllByText('Classes')
    await user.click(classLinks[classLinks.length - 1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
