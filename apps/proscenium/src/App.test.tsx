import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { BAR_HEIGHTS, COMPONENT_DOCK_URL, KPIS, NAV_LINKS, TRANSACTIONS } from './data/hero'

describe('App', () => {
  it('renders one bar, one nav, one main, one section and a footer', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('nav')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
  })

  it('has exactly one h1 and no h2, img, form or input', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('form')).toHaveLength(0)
    expect(container.querySelectorAll('input')).toHaveLength(0)
    expect(container.querySelectorAll('button')).toHaveLength(1)
  })

  it('labels the section with the h1', () => {
    render(<App />)

    const section = screen.getByRole('region')
    const heading = screen.getByRole('heading', { level: 1 })

    expect(section).toHaveAttribute('aria-labelledby', heading.id)
  })

  it('is one viewport-tall band with the reduced-motion hook class', () => {
    const { container } = render(<App />)
    const band = container.querySelector('.hero-ground')

    expect(band).toHaveClass('hero-motion', 'min-h-[100svh]', 'overflow-hidden')
  })

  it('renders the four nav links and the two bar actions', () => {
    render(<App />)

    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start free' })).toBeInTheDocument()
  })

  it('shows the announcement pill, headline, sub copy and two hero actions', () => {
    render(<App />)

    expect(screen.getByText('Rolling forecasts are live')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /^Close the books in hours, not weeks\.$/,
    )
    expect(screen.getByText(/reconciles bank feeds, invoices and payroll/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start 14-day trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch 3-min demo/ })).toBeInTheDocument()
  })

  it('renders three trust points', () => {
    render(<App />)

    for (const point of ['No credit card', 'SOC 2 Type II', 'Cancel anytime']) {
      expect(screen.getByText(point)).toBeInTheDocument()
    }
  })

  it('exposes the dashboard as a single labelled image', () => {
    render(<App />)

    const mock = screen.getByRole('img')
    const label = mock.getAttribute('aria-label') ?? ''

    expect(label).toContain('$84,210')
    expect(label).toContain('12.4')
    expect(label).toContain('revenue chart')
  })

  it('renders the three KPI tiles and the twelve chart bars', () => {
    const { container } = render(<App />)

    for (const kpi of KPIS) {
      expect(screen.getByText(kpi.label)).toBeInTheDocument()
    }

    const bars = container.querySelectorAll('.hero-bars > span')
    expect(bars).toHaveLength(BAR_HEIGHTS.length)
    expect(bars).toHaveLength(12)
  })

  it('renders three transaction rows, the negative amount in U+2212', () => {
    const { container } = render(<App />)
    const rows = container.querySelectorAll('li.tabular-nums, ul.mt-3 > li')

    expect(rows).toHaveLength(TRANSACTIONS.length)
    expect(within(rows[1] as HTMLElement).getByText('\u2212$21,340.00')).toBeInTheDocument()
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })

  it('adds nothing below the band except the footer', () => {
    const { container } = render(<App />)
    const footer = screen.getByRole('contentinfo')

    expect(footer.previousElementSibling?.tagName).toBe('DIV')
    expect(container.lastElementChild).toBe(footer)
  })
})
