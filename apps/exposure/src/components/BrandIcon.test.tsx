import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['X', 'Facebook', 'Globe', 'Instagram'] as const)('renders the %s glyph', (name) => {
    render(<BrandIcon name={name} />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M'))
  })

  it('applies the default size class', () => {
    render(<BrandIcon name="X" />)
    expect(document.querySelector('svg')).toHaveClass('h-4', 'w-4')
  })

  it('applies a custom className', () => {
    render(<BrandIcon name="X" className="h-6 w-6 text-white" />)
    expect(document.querySelector('svg')).toHaveClass('h-6', 'w-6', 'text-white')
  })
})
