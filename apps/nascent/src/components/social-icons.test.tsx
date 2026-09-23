import { render } from '@testing-library/react'
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './social-icons'

describe('Social icons', () => {
  it('renders Twitter icon SVG', () => {
    const { container } = render(<TwitterIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders Facebook icon SVG', () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders Instagram icon SVG', () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedIn icon SVG', () => {
    const { container } = render(<LinkedinIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('accepts custom size', () => {
    const { container } = render(<TwitterIcon size={24} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })
})
