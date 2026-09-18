import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders location info', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText(/New York/)).toBeInTheDocument()
  })

  it('renders service times', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Service Times')).toBeInTheDocument()
    expect(screen.getByText(/Wednesdays at 6:30PM/)).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText(/info@yoursite\.com/)).toBeInTheDocument()
  })
})
