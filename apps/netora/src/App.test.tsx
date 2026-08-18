import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Netora — IT Solutions Template')
  })

  it('renders every section in the reference order', () => {
    const { container } = render(<App />)
    const sections = container.querySelectorAll<HTMLElement>('section, footer')
    const labels = [...sections].map(
      (el) => el.getAttribute('aria-label') ?? el.tagName.toLowerCase(),
    )
    expect(labels).toEqual([
      'Hero',
      'Satisfaction Guaranteed',
      'Industry We Offer',
      'About',
      'Services',
      'Insights',
      'Brands',
      'Our Case Study',
      'Testimonials',
      'Footer',
    ])
  })

  it('renders the key headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Best IT Solution')
    const main = screen.getByRole('main')
    for (const text of [
      'Satisfaction Guaranteed',
      'Managed IT services customized for your industry',
      'Build your amazing website with Netora',
      'We design apps & websites that lead in their space',
      'Insights to help you do what you do better, faster and more profitably.',
      'We work with global brands',
      'Love from our client',
    ]) {
      expect(within(main).getByRole('heading', { level: 2, name: text })).toBeInTheDocument()
    }
  })
})
