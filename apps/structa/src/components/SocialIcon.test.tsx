import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'

describe('SocialIcon', () => {
  it('renders facebook icon', () => {
    const { container } = render(<SocialIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders twitter icon', () => {
    const { container } = render(<SocialIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders instagram icon with rect and line', () => {
    const { container } = render(<SocialIcon name="instagram" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg!.querySelector('rect')).toBeInTheDocument()
    expect(svg!.querySelector('line')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<SocialIcon name="facebook" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })
})
