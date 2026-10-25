import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('stacks the ten bands in the reference order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('section, header, footer')).map((node) =>
      node.tagName === 'SECTION' ? node.id : node.tagName.toLowerCase(),
    )

    expect(ids).toEqual([
      'header',
      'top',
      'about',
      'services',
      'case-study',
      'attorneys',
      'contact',
      'testimonials',
      'blog',
      'footer',
    ])
  })

  it('offers a skip link into the main landmark', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: 'Skip to main content' })

    expect(skip).toHaveAttribute('href', '#main-content')
    expect(document.querySelector('#main-content')).not.toBeNull()
  })

  it('renders exactly one h1 and never skips a heading level', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)

    const levels = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((node) =>
      Number(node.tagName.slice(1)),
    )
    for (let index = 1; index < levels.length; index += 1) {
      expect(levels[index]!).toBeLessThanOrEqual(levels[index - 1]! + 1)
    }
  })

  it('keeps every in-page anchor resolvable', () => {
    const { container } = render(<App />)
    const anchors = Array.from(container.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[]

    expect(anchors.length).toBeGreaterThan(0)
    for (const anchor of anchors) {
      const target = anchor.getAttribute('href')!.slice(1)
      expect(target).not.toBe('')
      expect(document.getElementById(target)).not.toBeNull()
    }
  })

  it('never mentions the source design anywhere in the render', () => {
    const { container } = render(<App />)

    expect(container.textContent?.toLowerCase()).not.toContain('colorlib')
    expect(container.textContent?.toLowerCase()).not.toContain('ariclaw')
  })
})
