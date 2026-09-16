import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Become a Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Quick Fundraising')).toBeInTheDocument()
    expect(screen.getByText('Start Donating')).toBeInTheDocument()
    expect(screen.getByText('Get Involved')).toBeInTheDocument()
  })
})
