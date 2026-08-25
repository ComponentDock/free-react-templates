import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './BrandIcons'

describe('BrandIcons', () => {
  it('renders FacebookIcon', () => {
    render(<FacebookIcon className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders TwitterIcon', () => {
    render(<TwitterIcon className="h-4 w-4" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon', () => {
    render(<InstagramIcon className="h-4 w-4" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedinIcon', () => {
    render(<LinkedinIcon className="h-4 w-4" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
