import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders facebook icon', () => {
    render(<BrandIcon name="facebook" className="h-5 w-5" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders x icon', () => {
    render(<BrandIcon name="x" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders dribbble icon', () => {
    render(<BrandIcon name="dribbble" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders linkedin icon', () => {
    render(<BrandIcon name="linkedin" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders instagram icon', () => {
    render(<BrandIcon name="instagram" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
