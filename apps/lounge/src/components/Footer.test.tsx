import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Lounge')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    const hours = screen.getAllByText('08:00 – 22:00')
    expect(hours).toHaveLength(2)
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('123 Coastal Avenue, Seaside Town, ST 45678')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button'))
    expect(input).toHaveValue('test@example.com')
  })
})
