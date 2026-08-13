import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with titles and descriptions', () => {
    render(<Services />)

    for (const title of [
      'Responsive Design',
      'Quality Matters',
      'Better Security',
      '24/7 Service',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    expect(cards[0]!.querySelector('svg')).toBeInTheDocument()
  })
})
