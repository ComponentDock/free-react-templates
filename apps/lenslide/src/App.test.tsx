import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes navbar, carousel, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Lenslide — Testimonial Carousel Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders carousel navigation controls', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })
})
