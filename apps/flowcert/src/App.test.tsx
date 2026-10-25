import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one banner, one main, one contentinfo and a single h1', () => {
    render(<App />)

    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('puts the skip link first and points it at the main landmark', () => {
    const { container } = render(<App />)

    const firstLink = container.querySelector('a')
    expect(firstLink).toHaveAttribute('href', '#main-content')
    expect(firstLink).toHaveTextContent('Skip to content')
    expect(container.querySelector('#main-content')).not.toBeNull()
  })

  it('renders the nine bands in reference order under the hero', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main section[id]')).map(
      (section) => section.id,
    )
    expect(ids).toEqual([
      'process',
      'pricing',
      'why-us',
      'services',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ])
  })

  it('renders every navigation target as a real element', () => {
    const { container } = render(<App />)

    for (const id of ['process', 'pricing', 'services', 'areas', 'why-us', 'contact', 'quote', 'faq']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })

  it('renders the page chrome: progress bar, cookie dialog and back-to-top control', () => {
    render(<App />)

    expect(screen.getByRole('progressbar', { name: 'Reading progress' })).toBeInTheDocument()
    expect(screen.getByRole('dialog', { name: 'Cookie notice' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })
})
