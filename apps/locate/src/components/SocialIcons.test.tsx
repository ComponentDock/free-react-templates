import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders FacebookIcon', () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders TwitterIcon', () => {
    const { container } = render(<TwitterIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon', () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedinIcon', () => {
    const { container } = render(<LinkedinIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('accepts size prop', () => {
    const { container } = render(<FacebookIcon size={24} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })
})
