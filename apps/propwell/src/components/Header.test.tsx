import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the top bar with phone and email', () => {
    render(<Header />)

    expect(screen.getByText('+001 325 589 668')).toBeInTheDocument()
    expect(screen.getByText('info@propwell.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Header />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Header />)

    expect(screen.getByText('Propwell')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders register and login buttons', () => {
    render(<Header />)

    expect(screen.getAllByText('Register').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggleButton = screen.getByLabelText('Open menu')
    expect(toggleButton).toBeInTheDocument()

    await user.click(toggleButton)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('has semantic header role', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('has nav aria-label', () => {
    render(<Header />)

    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })
})
