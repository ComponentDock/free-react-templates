import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four overlapping service cards', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('section')).toHaveAttribute('id', 'services')
    expect(container.querySelector('.services-overlap')).toBeInTheDocument()
    for (const title of [
      'Best Price Guarantee',
      'Travellers Love Us',
      'Best Travel Agent',
      'Our Dedicated Support',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.service-card')).toHaveLength(4)
    expect(container.querySelectorAll('.service-card svg')).toHaveLength(4)
  })
})
