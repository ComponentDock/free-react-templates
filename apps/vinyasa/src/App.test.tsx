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
    expect(sections).toHaveLength(7)
    const ids = Array.from(sections).map((section) => section.id)
    expect(ids).toEqual(['home', 'about', 'classes', 'schedule', 'testimonials', 'cta', 'blog'])

    expect(
      screen.getByRole('heading', { level: 1, name: 'to Shape your body' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Featured Classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Client's Feedback" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Recent Blogs' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('renders the Vinyasa brand in the header and the footer', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /Vinyasa/ }).length).toBeGreaterThanOrEqual(1)
  })
})
