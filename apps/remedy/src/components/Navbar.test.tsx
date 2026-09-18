import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Remedy')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByLabelText(/mobile navigation/i)).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })

  it('toggles search bar', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchBtn = screen.getByRole('button', { name: /search/i })
    await user.click(searchBtn)
    expect(screen.getByTestId('search-bar')).toBeInTheDocument()
    const closeBtn = screen.getByRole('button', { name: /close search/i })
    await user.click(closeBtn)
    expect(screen.queryByTestId('search-bar')).not.toBeInTheDocument()
  })

  it('has shopping cart icon', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /shopping cart/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByLabelText(/mobile navigation/i)).toBeInTheDocument()
    const homeLink = screen.getByLabelText(/mobile navigation/i).querySelector('a')
    expect(homeLink).toBeInTheDocument()
    await user.click(homeLink!)
    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })
})
