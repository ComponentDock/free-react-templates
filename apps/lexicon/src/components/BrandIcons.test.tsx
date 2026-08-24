import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './BrandIcons'

describe('BrandIcons', () => {
  it('renders FacebookIcon', () => {
    render(<FacebookIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('renders TwitterIcon', () => {
    render(<TwitterIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('renders LinkedinIcon', () => {
    render(<LinkedinIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('renders with custom size', () => {
    render(<FacebookIcon size={32} />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('renders with className', () => {
    render(<TwitterIcon className="text-brand" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('text-brand')
  })

  it('passes aria-hidden', () => {
    render(<LinkedinIcon aria-hidden={true} />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
