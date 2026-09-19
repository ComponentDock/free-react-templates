import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderInfoBar } from './HeaderInfoBar'

describe('HeaderInfoBar', () => {
  it('renders four info columns', () => {
    render(<HeaderInfoBar />)
    expect(screen.getByText('Dental Street 20199')).toBeInTheDocument()
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('+885 332 1568')).toBeInTheDocument()
    expect(screen.getByText('Book Appointment')).toBeInTheDocument()
  })

  it('renders detail text for each column', () => {
    render(<HeaderInfoBar />)
    expect(screen.getByText('Denver, USA')).toBeInTheDocument()
    expect(screen.getByText('Mon - Sat: 8:00 - 19:00')).toBeInTheDocument()
    expect(screen.getByText('Call us now!')).toBeInTheDocument()
    expect(screen.getByText('Schedule online')).toBeInTheDocument()
  })
})
