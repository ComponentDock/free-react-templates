import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the JobQuest logo', () => {
    render(<Navbar />)
    expect(screen.getByText('JobQuest')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Job Listings', 'About', 'Services', 'Blog']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the Contact Us button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    const closeBtn = screen.getByLabelText('Close menu')
    await user.click(closeBtn)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByLabelText('Open menu'))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
