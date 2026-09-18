import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    const cards = screen.getAllByRole('heading', { level: 3 })
    const titles = cards.map((card) => card.textContent)
    expect(titles).toContain('Web Design')
    expect(titles).toContain('Development')
    expect(titles).toContain('SEO')
    expect(titles).toContain('Marketing')
    expect(cards).toHaveLength(4)
  })
})
