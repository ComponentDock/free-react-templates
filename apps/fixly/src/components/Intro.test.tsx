import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the contact details card', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: /Contact Details/i })).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('203 Fake St. Mountain View, San Francisco')).toBeInTheDocument()
  })

  it('renders the three action links', () => {
    render(<Intro />)
    expect(screen.getByRole('link', { name: /Make An Appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Maintenance Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More Services/i })).toBeInTheDocument()
  })
})
