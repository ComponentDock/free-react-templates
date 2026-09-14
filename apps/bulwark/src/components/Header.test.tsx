import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders top bar with social icons and contact info', () => {
    render(<Header />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByText('+1 (123) 456 7890')).toBeInTheDocument()
    expect(screen.getByText('Register / Login')).toBeInTheDocument()
  })

  it('renders navigation menu with logo', () => {
    render(<Header />)
    expect(screen.getByText('BULWARK')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Pages dropdown button', () => {
    render(<Header />)
    expect(screen.getByText('Pages')).toBeInTheDocument()
  })

  it('shows dropdown items on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pagesBtn = screen.getByText('Pages')
    await user.hover(pagesBtn)
    expect(screen.getByText('Blog Single')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggleBtn = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
    await user.click(toggleBtn)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<Header />)
    const phoneLink = screen.getByRole('link', { name: /\+1 \(123\) 456 7890/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:+11234567890')
  })
})
