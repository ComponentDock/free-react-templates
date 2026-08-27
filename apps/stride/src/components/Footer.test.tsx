import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Stride')).toBeInTheDocument()
  })

  it('renders links section', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Classes')).toBeInTheDocument()
  })

  it('renders subscribe section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
  })

  it('submits newsletter form without page reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText('Email for newsletter')
    await user.type(emailInput, 'test@example.com')
    const subscribeBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(subscribeBtn)
    // Form should stay rendered (no page reload)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Stride/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
