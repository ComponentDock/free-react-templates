import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Specialties } from './Specialties'

describe('Specialties', () => {
  it('renders both specialty headings', () => {
    render(<Specialties />)
    expect(screen.getByText('Web & Mobile Specialties')).toBeInTheDocument()
    expect(screen.getByText('Intuitive Thinkers')).toBeInTheDocument()
  })

  it('renders descriptive text for both specialties', () => {
    render(<Specialties />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/It is a paradisematic country/)).toBeInTheDocument()
  })
})
