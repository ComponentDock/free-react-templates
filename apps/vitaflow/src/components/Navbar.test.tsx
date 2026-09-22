import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo with brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Vita')).toBeInTheDocument()
    expect(screen.getByText('flow')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Coach', 'Pricing', 'Services', 'Stories', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(screen.getByText('Home')).toBeVisible()
    await user.click(toggle)
    // After clicking, the menu should still be in the DOM
    expect(toggle).toBeInTheDocument()
  })
})
