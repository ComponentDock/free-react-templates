import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Draftly')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const aboutLinks = screen.getAllByText('About')
    const aboutLink = aboutLinks[1] as HTMLElement
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
