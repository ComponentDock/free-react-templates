import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { ROSTER } from './content'

describe('Nameplate app', () => {
  it('renders the single roster band on the sand ground', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelector('main')).toHaveClass('bg-sand', 'flex-1')
    expect(container.firstElementChild).toHaveClass('flex', 'min-h-screen', 'flex-col', 'bg-sand')
  })

  it('keeps one h1 and one h2 per person, in the reference order', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const names = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)

    expect(names).toEqual(['Ava Lindqvist', 'Daniel Okoro', 'Sofia Marin', 'Marcus Reyes'])
  })

  it('renders the four profiles as articles inside one list', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('article')).toHaveLength(4)
    expect(container.querySelectorAll('ul > li > article')).toHaveLength(4)
    expect(ROSTER).toHaveLength(4)
  })

  it('carries the reference copy for every profile', () => {
    render(<App />)

    expect(screen.getByText('Founder')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
    expect(screen.getByText('Client team')).toBeInTheDocument()
    expect(screen.getByText('Since 2014')).toBeInTheDocument()
    expect(screen.getByText('Since 2017')).toBeInTheDocument()
    expect(screen.getByText('Since 2019')).toBeInTheDocument()
    expect(screen.getByText('Since 2021')).toBeInTheDocument()
  })

  it('credits Component Dock in the only footer line', () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/i)).toBeInTheDocument()
  })

  it('ships no dead anchors: every href is an absolute URL or a mailto', () => {
    const { container } = render(<App />)
    const anchors = Array.from(container.querySelectorAll('a[href]'))

    expect(anchors.length).toBeGreaterThan(0)
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href') ?? ''

      expect(href).not.toBe('')
      expect(href).not.toBe('#')
      expect(href.startsWith('https://') || href.startsWith('mailto:')).toBe(true)
    })
  })

  it('names every icon-only control and hides its glyph from the accessibility tree', () => {
    const { container } = render(<App />)
    const iconLinks = Array.from(container.querySelectorAll('a')).filter((anchor) =>
      anchor.querySelector('svg'),
    )

    expect(iconLinks).toHaveLength(12)
    iconLinks.forEach((anchor) => {
      expect(anchor.getAttribute('aria-label')).toBeTruthy()
      expect(anchor.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
