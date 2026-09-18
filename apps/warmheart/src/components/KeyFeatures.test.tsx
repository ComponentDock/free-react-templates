import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { KeyFeatures } from './KeyFeatures'

describe('KeyFeatures', () => {
  it('renders the heading', () => {
    render(<KeyFeatures />)
    expect(screen.getByText('Our Key Features')).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<KeyFeatures />)
    expect(screen.getByText('Sponsorship')).toBeInTheDocument()
    expect(screen.getByText('Donate Amount')).toBeInTheDocument()
    expect(screen.getByText('Become a Volunteer')).toBeInTheDocument()
  })
})
