import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { VideoHero } from './VideoHero'

describe('VideoHero', () => {
  it('renders the heading', () => {
    render(<VideoHero />)
    expect(screen.getByText(/Most Recommended Hotel/)).toBeDefined()
  })

  it('renders the background image', () => {
    render(<VideoHero />)
    const bgImg = document.querySelector('img[src*="roxyglow-video"]') as HTMLImageElement
    expect(bgImg).toBeDefined()
    expect(bgImg.getAttribute('aria-hidden')).toBe('true')
  })
})
