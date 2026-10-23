import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

const services = [
  'Dog Checkup',
  'Dog Dermatology',
  'For Strong Teeth',
  'Dog First Aid',
  'Dog Dryer',
  'Expert Veterinarian',
] as const

describe('Services', () => {
  it('shows the heading and the six service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
  })

  it('renders a card for every service', () => {
    render(<Services />)

    expect(screen.getAllByRole('article')).toHaveLength(6)
  })
})
