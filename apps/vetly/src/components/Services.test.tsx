import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and the three pet care service cards', () => {
    render(<Services />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Pet Care Services/)

    expect(screen.getByRole('heading', { level: 3, name: 'Pet Traning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Hygienic Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pet Treatment' })).toBeInTheDocument()
    expect(screen.getByText(/far from the countries vokalia/i)).toBeInTheDocument()
  })
})
