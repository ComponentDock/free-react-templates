import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'

describe('SocialIcon', () => {
  it('renders twitter icon', () => {
    const { container } = render(<SocialIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('renders facebook icon', () => {
    const { container } = render(<SocialIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders instagram icon', () => {
    const { container } = render(<SocialIcon name="instagram" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies size prop', () => {
    const { container } = render(<SocialIcon name="twitter" size={32} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('applies className prop', () => {
    const { container } = render(<SocialIcon name="twitter" className="text-white" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('text-white')
  })
})
