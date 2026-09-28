import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FacebookIcon, TwitterIcon, InstagramIcon, DribbbleIcon } from './social-icons'

describe('Social Icons', () => {
  it('renders the FacebookIcon SVG', () => {
    render(<FacebookIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the TwitterIcon SVG', () => {
    render(<TwitterIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the InstagramIcon SVG', () => {
    render(<InstagramIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the DribbbleIcon SVG', () => {
    render(<DribbbleIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
