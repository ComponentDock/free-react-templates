import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { NAV } from '../content'

const BANDS = ['work', 'disciplines', 'process', 'deliverables', 'testimonials', 'faq', 'contact']

describe('App', () => {
  it('renders the ten bands in the reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main > section')).map(
      (section) => section.id || 'hero',
    )
    expect(ids).toEqual(['hero', ...BANDS])

    expect(container.querySelector('main#main-content')).toBeInTheDocument()
    expect(container.querySelector('header[data-header]')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('keeps every nav target on the page and every anchor real', () => {
    const { container } = render(<App />)

    for (const item of NAV) {
      const target = container.querySelector(item.href)
      expect(target).not.toBeNull()
    }

    const anchors = Array.from(container.querySelectorAll('a'))
    expect(anchors.length).toBeGreaterThan(20)
    for (const anchor of anchors) {
      expect(anchor.getAttribute('href')).not.toBe('#')
    }

    const tels = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('tel:'))
    expect(tels).toHaveLength(2)
    for (const tel of tels) {
      expect(tel).toHaveAttribute('href', 'tel:+35315590284')
    }
  })

  it('puts the required Component Dock link in the footer', () => {
    const { container } = render(<App />)

    const footer = container.querySelector('footer')!
    const dock = footer.querySelector('a[href="https://www.componentdock.com/"]')
    expect(dock).not.toBeNull()
  })

  it('describes every photograph', () => {
    const { container } = render(<App />)

    const images = Array.from(container.querySelectorAll('img'))
    expect(images).toHaveLength(4)
    for (const image of images) {
      expect(image.getAttribute('alt')).toBeTruthy()
      expect(image.getAttribute('src')).toContain('picsum.photos')
    }
  })

  it('names the page from the one h1 and keeps the demo control a button', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('button', { name: /Watch Demo/ })).toBeInTheDocument()
  })
})
