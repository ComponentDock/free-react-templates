import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Renovo')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    for (const link of [
      'Home',
      'About',
      'Services',
      'Process',
      'FAQ',
      'Testimonials',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const aboutLinks = screen.getAllByText('About')
    const lastAbout = aboutLinks[aboutLinks.length - 1]
    if (lastAbout) await user.click(lastAbout)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
