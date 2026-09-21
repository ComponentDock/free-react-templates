import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders facebook icon', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('path')).toBeInTheDocument()
  })

  it('renders twitter icon', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders linkedin icon', () => {
    const { container } = render(<BrandIcon name="linkedin" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-4')
  })
})
