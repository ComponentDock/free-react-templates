import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Steps } from './Steps'

describe('Steps', () => {
  it('renders the heading and three steps', () => {
    render(<Steps />)
    expect(
      screen.getByRole('heading', { name: /Get Car Repair In Easy Steps/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get A Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Book Car Inspection' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Your Car Fixed' })).toBeInTheDocument()
  })

  it('renders Learn More and Book An Appointment links', () => {
    render(<Steps />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book An Appointment/i })).toBeInTheDocument()
  })
})
