import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders both service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Banking Consultation')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Expert guidance/)).toBeInTheDocument()
    expect(screen.getByText(/Personalized banking advice/)).toBeInTheDocument()
  })
})
