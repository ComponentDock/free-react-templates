import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

describe('social-icons', () => {
  it('renders FacebookIcon', () => {
    render(<FacebookIcon className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders TwitterIcon', () => {
    render(<TwitterIcon className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders InstagramIcon', () => {
    render(<InstagramIcon className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders LinkedinIcon', () => {
    render(<LinkedinIcon className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('passes additional props to SVG', () => {
    render(<FacebookIcon className="h-4 w-4" data-testid="fb-icon" />)
    expect(screen.getByTestId('fb-icon')).toBeInTheDocument()
  })
})
