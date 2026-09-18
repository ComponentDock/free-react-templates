import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Make Donation')).toBeInTheDocument()
    expect(screen.getByText('Become A Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Sponsorship')).toBeInTheDocument()
  })
})
