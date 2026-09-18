import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us heading', () => {
    render(<Footer />)
    const headings = screen.getAllByText('About Us')
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Features section with links', () => {
    render(<Footer />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Follow Us section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Enter Email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByLabelText('Enter Email')).toHaveValue('test@example.com')
  })
})
