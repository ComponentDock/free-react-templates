import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg with the brand path when given a label', () => {
    render(<BrandIcon brand="facebook" label="Facebook" />)
    const img = screen.getByRole('img', { name: 'Facebook' })
    expect(img).toHaveAttribute('viewBox', '0 0 24 24')
    expect(img).toHaveAttribute('fill', 'currentColor')
    expect(img.querySelector('path')).not.toBeNull()
  })

  it('renders aria-hidden when no label is provided', () => {
    const { container } = render(<BrandIcon brand="youtube" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).not.toHaveAttribute('role')
  })

  it.each(['twitter', 'instagram', 'youtube'] as const)('renders a path for %s', (brand) => {
    render(<BrandIcon brand={brand} label={brand} />)
    expect(screen.getByRole('img', { name: brand }).querySelector('path')).not.toBeNull()
  })
})
