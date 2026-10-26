import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one full-viewport gradient stage as the only main', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    const main = mains[0]!
    expect(main.className).toContain('min-h-screen')
    expect(main.className).toContain('overflow-hidden')
    expect(main.className).toContain('relative')
    expect(main.className).toContain(
      'bg-[linear-gradient(135deg,#1e1b4b_0%,#4c1d95_45%,#9d174d_100%)]',
    )
    expect(main.className).toContain('py-[clamp(40px,7vw,88px)]')
    expect(main.className).toContain('px-4')
  })

  it('orders the stage: three blobs, the head, the card grid, the footer', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const children = [...main.children]
    expect(children.map((child) => child.tagName)).toEqual([
      'DIV',
      'DIV',
      'DIV',
      'HEADER',
      'DIV',
      'FOOTER',
    ])
    children.slice(0, 3).forEach((blob) => expect(blob).toHaveAttribute('aria-hidden', 'true'))
  })

  it('lays the cards out on the arithmetic grid, never on a breakpoint', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const grid = main.querySelectorAll(':scope > div')[3]!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(290px,1fr))]')
    expect(grid.className).toContain('gap-[22px]')
    expect(grid.className).toContain('max-w-[1140px]')
    expect(grid.className).toContain('mx-auto')
    expect(grid.children).toHaveLength(3)
    expect(grid.className).not.toContain('md:')
    expect(grid.className).not.toContain('lg:')
  })

  it('names each of the three sections by its own heading', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(screen.getByRole('region', { name: 'Everyday account' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Savings goal' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Recent activity' })).toBeInTheDocument()
  })

  it('exposes two card controls plus the attribution link and no dead hash', () => {
    render(<App />)

    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getAllByRole('link')).toHaveLength(2)
    document.querySelectorAll('a').forEach((link) => {
      expect(link.getAttribute('href')).not.toBe('#')
    })
  })

  it('ships no photography, no scripted widget and no form', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('img, iframe, video')).toHaveLength(0)
    expect(container.querySelectorAll('form, input, select, textarea')).toHaveLength(0)
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('searchbox')).toBeNull()
  })

  it('carries the reference copy and the derived month, not the source contradiction', () => {
    const { container } = render(<App />)

    const text = container.textContent ?? ''
    expect(text).toContain('€6,482.30')
    expect(text).toContain('€2,720')
    expect(text).toContain('of €4,000')
    expect(text).toContain('€320 a month · target January 2027')
    expect(text).toContain('−€42.18')
    expect(text).toContain('+€3,150.00')
    expect(text).toContain('−€64.00')
    expect(text).toContain('−€8.40')
    expect(text).toContain('68%')
    expect(text).toContain('08/29')
    expect(text).not.toMatch(/-\s?€/)
  })

  it('gives the bank card its own 320px floor so it never collapses', () => {
    render(<App />)

    expect(screen.getByRole('region', { name: 'Everyday account' }).className).toContain(
      'min-h-[320px]',
    )
    expect(screen.getByRole('region', { name: 'Savings goal' }).className).not.toContain('min-h-')
  })

  it('keeps the attribution inside the stage but outside the card grid', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')
    expect(main.contains(footer)).toBe(true)
    expect(main.querySelectorAll(':scope > div')[3]!.contains(footer)).toBe(false)
  })
})
