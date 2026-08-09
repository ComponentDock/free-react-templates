import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and blurb', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Cleaning Services for Every Need' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/From weekly home cleanings to large-scale commercial projects/),
    ).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)

    for (const title of [
      'Regular Cleaning',
      'Deep Cleaning',
      'Move-In/Out Cleaning',
      'Commercial Cleaning',
      'Post-Construction',
      'Green Cleaning',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/intensive top-to-bottom clean/)).toBeInTheDocument()
    expect(screen.getByText(/eco-friendly products that are safe for children/)).toBeInTheDocument()
  })
})
