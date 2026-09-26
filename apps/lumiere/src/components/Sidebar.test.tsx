import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the brand name', () => {
    render(<Sidebar />)
    expect(screen.getByText('Lumiere')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the newsletter heading', () => {
    render(<Sidebar />)
    expect(screen.getByText('Subscribe for newsletter')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Sidebar />)

    const form = screen.getByLabelText('Email address for newsletter').closest('form')!
    form.addEventListener('submit', (e) => e.preventDefault())
    form.addEventListener('submit', preventDefault)

    await user.type(screen.getByLabelText('Email address for newsletter'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders the Component Dock link in footer', () => {
    render(<Sidebar />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders mobile toggle button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('has correct navigation link targets', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
