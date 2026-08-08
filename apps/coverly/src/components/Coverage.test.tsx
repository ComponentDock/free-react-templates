import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Coverage } from './Coverage'

describe('Coverage', () => {
  it('renders the section heading and blurb', () => {
    render(<Coverage />)
    expect(screen.getByText('Coverage Options')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Insurance for Every Need' }),
    ).toBeInTheDocument()
  })

  it('renders all six insurance cards with Learn More links', () => {
    render(<Coverage />)
    for (const title of [
      'Auto Insurance',
      'Home Insurance',
      'Life Insurance',
      'Health Insurance',
      'Business Insurance',
      'Umbrella Insurance',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })
})
