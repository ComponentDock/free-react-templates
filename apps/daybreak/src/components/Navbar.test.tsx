import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Daybreak logo', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: 'Daybreak' })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '#')
  })

  it('renders navigation with all links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()

    for (const link of ['Home', 'About', 'Portfolio', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('toggles search input on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchBtn = screen.getByRole('button', { name: 'Open search' })
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()

    await user.click(searchBtn)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close search' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })
})
