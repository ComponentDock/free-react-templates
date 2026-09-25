import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and hamburger button', () => {
    render(<Navbar />)
    expect(screen.getByText('T')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('opens and closes the sidebar on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: /sidebar navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(
      screen.queryByRole('navigation', { name: /sidebar navigation/i }),
    ).not.toBeInTheDocument()
  })

  it('contains all nav links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    for (const link of ['Home', 'About Us', 'Our Menu', 'Reserve A Table', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('closes sidebar when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('link', { name: 'Home' }))
    expect(
      screen.queryByRole('navigation', { name: /sidebar navigation/i }),
    ).not.toBeInTheDocument()
  })
})
