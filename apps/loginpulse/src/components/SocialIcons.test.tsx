import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookIcon, GoogleIcon } from './SocialIcons'

describe('FacebookIcon', () => {
  it('renders an SVG', () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has aria-hidden', () => {
    const { container } = render(<FacebookIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('GoogleIcon', () => {
  it('renders an SVG', () => {
    const { container } = render(<GoogleIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has aria-hidden', () => {
    const { container } = render(<GoogleIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
