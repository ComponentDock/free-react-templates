import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('mounts every band in order behind the header, footer and back-to-top control', () => {
    const { container } = render(<App />)

    expect(document.title).toBe('Gridhost — Web Hosting Template')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')

    const main = screen.getByRole('main')
    const ids = Array.from(main.querySelectorAll('section[id]')).map((section) => section.id)
    expect(ids).toEqual([
      'home',
      'services',
      'domains',
      'about',
      'pricing',
      'testimonials',
      'contact',
      'blog',
    ])

    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(container.querySelector('header')).toHaveAttribute('data-scrolled', 'false')
  })
})
