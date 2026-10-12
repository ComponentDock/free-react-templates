import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MapBand } from './MapBand'

describe('MapBand', () => {
  it('repeats the features-band title above its own blurb', () => {
    render(<MapBand />)
    expect(screen.getByRole('region', { name: 'Server locations' })).toHaveClass('py-24')
    expect(screen.getByRole('heading', { level: 2, name: 'Cloud load balancing' })).toBeVisible()
    expect(screen.getByText(/Six regions, one network/)).toBeInTheDocument()
  })

  it('renders a lazy full-width map embed with an accessible title', () => {
    render(<MapBand />)
    const map = screen.getByTitle('Presto datacentre map')
    expect(map.tagName).toBe('IFRAME')
    expect(map).toHaveAttribute('loading', 'lazy')
    expect(map).toHaveAttribute('sandbox', 'allow-scripts')
    expect(map).toHaveClass('h-[600px]', 'w-full', 'border-0')
    expect(map).toHaveAttribute('src', expect.stringContaining('openstreetmap.org'))
  })
})
