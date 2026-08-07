import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    for (const title of [
      'Hair Dressing',
      'Ombre Hair',
      'Hair Coloring',
      'Treatments',
      'Cutting & Trimming',
      'Keratin Straightening',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Even the all-powerful Pointing/)).toHaveLength(6)
  })
})
