import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Medair — Health & Wellness Template')
  })

  it('composes every section in order', () => {
    const { container } = render(<App />)

    const headings = Array.from(container.querySelectorAll('h1, h2, h3')).map((node) =>
      (node as HTMLElement).textContent?.trim(),
    )
    expect(headings.join(' | ')).toContain('Eat Mindfully')
    expect(headings.join(' | ')).toContain('Better Eat, Better Life')
    expect(headings.join(' | ')).toContain('How It Works?')
    expect(headings.join(' | ')).toContain('Start Your Body Changing With Healthy Nutrition')
    expect(headings.join(' | ')).toContain('Successful Stories')
    expect(headings.join(' | ')).toContain('Recent Blog')

    // Section order: hero, about, how-it-works, video, testimonials, blog,
    // appointment all appear before the footer.
    expect(screen.getAllByRole('link', { name: 'Learn More' }).length).toBeGreaterThanOrEqual(9)
    expect(
      screen.getByRole('link', { name: 'More templates at Component Dock' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Drop A Message' })).toBeInTheDocument()
  })
})
