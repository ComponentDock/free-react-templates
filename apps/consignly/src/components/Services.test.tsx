import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the three freight service cards', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
    for (const heading of ['Air Freight', 'Sea Freight', 'Land Freight']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read more/ })).toHaveLength(3)
  })

  it('links the Read more buttons to the about section', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Read more/ })
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#about')
    }
  })

  it('renders three decorative icons (plane, ship, truck)', () => {
    const { container } = render(<Services />)
    expect(container.querySelectorAll('svg[aria-hidden="true"]').length).toBe(6)
  })
})
