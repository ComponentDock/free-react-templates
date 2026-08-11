import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroHeadline, heroImageAlt, heroParagraph, heroSubheading, scrollLabel } from '../data'

describe('Hero', () => {
  it('fills the viewport and shows the gradient overlay over the background image', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region', { name: 'Welcome' })
    expect(section).toHaveClass('min-h-screen')

    const image = screen.getByRole('img', { name: heroImageAlt })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/vellum-hero/1600/900')
    expect(image).toHaveClass('object-cover')

    const overlay = container.querySelector('[style]')
    expect(overlay?.getAttribute('style')).toContain('linear-gradient(45deg')
    expect(overlay?.getAttribute('style')).toContain('rgb(242, 0, 255)')
    expect(overlay?.getAttribute('style')).toContain('rgb(255, 186, 66)')
    expect(overlay).toHaveClass('opacity-80')
  })

  it('renders the subheading, the huge white headline and a supporting paragraph', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: heroSubheading })).toBeInTheDocument()
    const headline = screen.getByRole('heading', { level: 1, name: heroHeadline })
    expect(headline).toHaveClass('text-white', 'font-bold')
    expect(screen.getByText(heroParagraph)).toBeInTheDocument()
  })

  it('renders an accessible scroll-down indicator linking to the blog', () => {
    render(<Hero />)
    const indicator = screen.getByRole('link', { name: scrollLabel })
    expect(indicator).toHaveAttribute('href', '#blog')
  })
})
