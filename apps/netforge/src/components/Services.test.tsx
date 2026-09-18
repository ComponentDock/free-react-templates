import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    for (const title of [
      'Web Development',
      'Cloud Solutions',
      'Cybersecurity',
      'Digital Marketing',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows a description for each service', () => {
    render(<Services />)

    expect(screen.getByText(/Custom web applications/)).toBeInTheDocument()
    expect(screen.getByText(/Scalable cloud infrastructure/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive security audits/)).toBeInTheDocument()
    expect(screen.getByText(/Data-driven marketing/)).toBeInTheDocument()
  })
})
