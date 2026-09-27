import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand link and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Dwellpoint' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByTestId('mobile-nav')).toBeNull()
    await user.click(toggle)
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByTestId('mobile-nav')).toBeNull()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument()
    await user.click(screen.getByText('Blog'))
    expect(screen.queryByTestId('mobile-nav')).toBeNull()
  })
})
