import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders six service cards', () => {
    render(<Services />)
    for (const name of [
      'Hair Dressing',
      'Zen Massage',
      'Manicure & Pedicure',
      'Make Up',
      'Tanning Bed',
      'Spa Treatments',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })
})
