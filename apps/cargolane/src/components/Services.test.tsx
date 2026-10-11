import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SERVICES } from '../data/content'
import { Services } from './Services'

describe('Services', () => {
  it('renders the six service units with icons, blurbs, and Learn More links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(
      screen.getByText('End-to-end freight solutions, from first mile to final delivery.'),
    ).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual([
      'Air Freight',
      'Ocean Freight',
      'Land Transportation',
      'Warehousing',
      'Storage',
      'Worldwide Delivery',
    ])
    expect(SERVICES).toHaveLength(6)
    for (const service of SERVICES) {
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }
    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links).toHaveLength(6)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
