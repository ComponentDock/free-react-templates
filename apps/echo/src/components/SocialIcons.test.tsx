import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders TwitterIcon with aria-hidden', () => {
    render(<TwitterIcon className="h-5 w-5" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders FacebookIcon with aria-hidden', () => {
    render(<FacebookIcon className="h-5 w-5" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders InstagramIcon with aria-hidden', () => {
    render(<InstagramIcon className="h-5 w-5" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
