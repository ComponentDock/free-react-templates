import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('renders the three widget columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('lists the opening hours rows', () => {
    render(<Footer />)
    for (const row of footer.hours) {
      expect(screen.getByText(row.days)).toBeInTheDocument()
      expect(screen.getAllByText(row.time).length).toBeGreaterThan(0)
    }
  })

  it('renders the address and both phone numbers', () => {
    render(<Footer />)
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    for (const phone of footer.phones) {
      expect(screen.getByText(phone)).toBeInTheDocument()
    }
  })

  it('links the credit line to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the social icon links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('keeps the newsletter form non-navigating on submit', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    expect(submit).toHaveAttribute('type', 'submit')

    fireEvent.change(input, { target: { value: 'hungry@example.com' } })
    fireEvent.click(submit)
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })
})
