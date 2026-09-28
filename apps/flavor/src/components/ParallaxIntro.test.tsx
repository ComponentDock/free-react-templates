import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ParallaxIntro } from './ParallaxIntro'
import { parallaxIntro } from '../data'

describe('ParallaxIntro', () => {
  it('renders the heading and body text', () => {
    render(<ParallaxIntro />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(parallaxIntro.heading)
    expect(screen.getByText(parallaxIntro.body)).toBeInTheDocument()
  })

  it('renders the Watch Video CTA button', () => {
    render(<ParallaxIntro />)
    const cta = screen.getByRole('link', { name: /Watch Video/i })
    expect(cta).toHaveAttribute('href', '#home')
  })
})
