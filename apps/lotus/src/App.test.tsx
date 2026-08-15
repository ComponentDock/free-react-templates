import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the source order within the landmarks', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const sections = container.querySelectorAll('main > section')
    expect(sections).toHaveLength(10)
    const ids = Array.from(sections).map((section) => section.id)
    expect(ids).toEqual([
      'home',
      'about',
      'services',
      'classes',
      'trainers',
      'testimonials',
      'pricing',
      'schedule',
      'blog',
      'instagram',
    ])

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Experience the best workout humanly possible',
    )
    expect(screen.getByRole('heading', { name: 'Explore our services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet our trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('renders the Lotus brand in the header and the footer', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Lotus' })).toHaveLength(2)
  })
})
