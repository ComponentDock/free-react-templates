import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DottedMap } from './DottedMap'

describe('DottedMap', () => {
  it('renders a decorative svg with landmass dots', () => {
    const { container } = render(<DottedMap className="w-full" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('focusable', 'false')
    expect(svg!.querySelectorAll('circle').length).toBeGreaterThan(0)
    expect(svg!.getAttribute('class')).toContain('w-full')
  })
})
