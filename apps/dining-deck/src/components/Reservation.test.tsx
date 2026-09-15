import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the heading and contact info', () => {
    render(<Reservation />)
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(/123 Gourmet Ave/i)).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('hello@diningdeck.com')).toBeInTheDocument()
  })
})
