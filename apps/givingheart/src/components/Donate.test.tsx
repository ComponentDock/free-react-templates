import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Donate } from './Donate'

describe('Donate', () => {
  it('renders the section heading', () => {
    render(<Donate />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Donate Now')
  })

  it('renders the subtitle', () => {
    render(<Donate />)
    expect(screen.getByText(/generosity can change lives/)).toBeInTheDocument()
  })

  it('renders 3 trust items', () => {
    render(<Donate />)
    expect(screen.getByText('Divided Evenly')).toBeInTheDocument()
    expect(screen.getByText('Transparency All the Way')).toBeInTheDocument()
    expect(screen.getByText('Trustworthy')).toBeInTheDocument()
  })

  it('renders the donation form with all fields', () => {
    render(<Donate />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Donation amount (USD)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message (optional)')).toBeInTheDocument()
  })

  it('renders the donate submit button', () => {
    render(<Donate />)
    expect(screen.getByRole('button', { name: /donate/i })).toBeInTheDocument()
  })

  it('renders payment methods indicator', () => {
    render(<Donate />)
    expect(screen.getByText(/We Accept/)).toBeInTheDocument()
  })

  it('form submission prevents default', () => {
    render(<Donate />)
    const form = screen.getByRole('button', { name: /donate/i }).closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('has a dark parallax background', () => {
    render(<Donate />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    const overlay = section.querySelector('.bg-black\\/90')
    expect(overlay).toBeInTheDocument()
  })
})
