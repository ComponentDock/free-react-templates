import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section heading and three service cards in order', () => {
    render(<Services />)
    expect(screen.getByText(services.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    for (const item of services.items) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.copy)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: services.moreLabel })).toHaveLength(3)
  })
})
