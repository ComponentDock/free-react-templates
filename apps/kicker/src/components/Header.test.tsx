import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand wordmark', () => {
    render(<Header />)
    const logos = screen.getAllByText('KICKER')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the sign in link', () => {
    render(<Header />)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Header />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Vimeo')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Science')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Beauty')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Arts & Culture')).toBeInTheDocument()
    expect(screen.getByText('Opinion')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('toggles the Page dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pageBtn = screen.getByRole('button', { name: /Page/ })
    expect(pageBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(pageBtn)
    expect(pageBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
    expect(screen.getByText('Post Details')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    await user.click(pageBtn)
    expect(pageBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    expect(menuBtn).toBeInTheDocument()
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
