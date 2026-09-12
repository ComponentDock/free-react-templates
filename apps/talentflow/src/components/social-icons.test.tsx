import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, GitHubIcon } from './social-icons'

describe('Social Icons', () => {
  it('renders FacebookIcon', () => {
    render(<FacebookIcon className="test-icon" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('test-icon')
  })

  it('renders TwitterIcon', () => {
    render(<TwitterIcon className="test-icon" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('test-icon')
  })

  it('renders GitHubIcon', () => {
    render(<GitHubIcon className="test-icon" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('test-icon')
  })

  it('renders without className', () => {
    render(<FacebookIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
