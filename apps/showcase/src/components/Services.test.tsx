import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six lifting service cards', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(6)
    for (const title of [
      'Web Design',
      'Photography',
      'Web Development',
      'App Development',
      'Branding',
      'Product Strategy',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(cards[0]).toHaveClass('hover:-translate-y-1')
    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
