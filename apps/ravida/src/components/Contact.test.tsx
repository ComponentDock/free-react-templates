import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('displays address information', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(/240, Kings Street, New York City USA/i)).toBeInTheDocument()
  })

  it('displays operating hours', () => {
    render(<Contact />)
    expect(screen.getByText('We Are Open')).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri (9.00-19.00)')).toBeInTheDocument()
    expect(screen.getByText('Sat - Sun (9.00-19.00)')).toBeInTheDocument()
  })

  it('displays reservation info', () => {
    render(<Contact />)
    // Use getByRole to disambiguate from quick link
    expect(screen.getByRole('heading', { name: 'Reservation' })).toBeInTheDocument()
    expect(screen.getByText('+880 367 251 167')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Contact />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Lunch')).toBeInTheDocument()
    expect(screen.getByText('Dinner')).toBeInTheDocument()
  })

  it('renders newsletter form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const email = screen.getByRole('textbox', { name: /email address/i })
    expect(email).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: /subscribe/i })
    expect(submit).toBeInTheDocument()
    await user.type(email, 'test@example.com')
    await user.click(submit)
  })
})
