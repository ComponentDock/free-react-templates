import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DashboardMock } from './DashboardMock'
import { BAR_HEIGHTS, CHART_PATH, KPIS, MOCK, RAIL_ITEMS, TRANSACTIONS } from '../data/hero'

const renderMock = () => render(<DashboardMock />)

describe('DashboardMock', () => {
  it('is one labelled image naming its numbers', () => {
    renderMock()
    const mock = screen.getByRole('img')

    expect(mock).toHaveAttribute('aria-label', MOCK.label)
    expect(mock).toHaveClass('hero-mock')
  })

  it('draws the fake browser chrome with three traffic lights and a URL field', () => {
    renderMock()
    const dots = document.querySelectorAll('i')

    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveClass('bg-[#fda4a4]')
    expect(dots[1]).toHaveClass('bg-[#fcd58a]')
    expect(dots[2]).toHaveClass('bg-[#9fe0b1]')
    expect(screen.getByText(MOCK.url)).toHaveClass('text-[12px]', 'heroSm:text-[11px]')
  })

  it('draws a rail of four placeholder tiles plus the logo, hidden on phones', () => {
    renderMock()
    const rail = document.querySelector('[aria-hidden="true"].heroSm\\:hidden')

    expect(rail?.children).toHaveLength(RAIL_ITEMS + 1)
    expect(rail?.firstElementChild).toHaveClass('h-[26px]', 'w-[26px]', 'bg-accent')

    const tiles = Array.from(rail?.children ?? []).slice(1)
    expect(tiles[0]).toHaveClass('bg-[rgba(91,61,245,.22)]')
    expect(tiles[1]).toHaveClass('bg-rail-tile')
  })

  it('renders three KPI tiles with their values and directions', () => {
    renderMock()

    for (const kpi of KPIS) {
      expect(screen.getByText(kpi.label)).toBeInTheDocument()
      expect(screen.getByText(kpi.value)).toBeInTheDocument()
    }

    expect(screen.getByText('+12.4%')).toHaveClass('bg-up-bg', 'text-up-fg')
    expect(screen.getByText('−4.1%')).toHaveClass('bg-down-bg', 'text-down-fg')
  })

  it('hides the third KPI on phones instead of shrinking it', () => {
    renderMock()
    const runway = screen.getByText('Runway').parentElement

    expect(runway).toHaveClass('heroSm:hidden')
  })

  it('paints twelve bars from data, the last one accented', () => {
    renderMock()
    const bars = Array.from(document.querySelectorAll('.hero-bars > span'))

    expect(bars).toHaveLength(BAR_HEIGHTS.length)
    bars.forEach((bar, index) => {
      expect((bar as HTMLElement).style.height).toBe(`${BAR_HEIGHTS[index]}%`)
    })
    expect(bars.at(-1)).toHaveClass('bg-accent')
    expect(bars[0]).toHaveClass('bg-bar', 'origin-bottom', 'rounded-t-[5px]')
  })

  it('lays the polyline over the bars without scaling its stroke', () => {
    renderMock()
    const svg = document.querySelector('svg.text-accent-2')
    const path = svg?.querySelector('path')

    expect(svg).toHaveAttribute('preserveAspectRatio', 'none')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(path).toHaveAttribute('d', CHART_PATH)
    expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
    expect(path).toHaveAttribute('stroke-width', '2.5')
  })

  it('renders three transaction rows with tinted chips and tabular amounts', () => {
    renderMock()
    const rows = Array.from(document.querySelectorAll('ul.mt-3 > li'))

    expect(rows).toHaveLength(TRANSACTIONS.length)

    const [first, second, third] = rows as HTMLElement[]
    expect(first).toHaveClass('border-b', 'border-row-rule', 'last:border-b-0')
    expect(second?.querySelector('span')?.style.backgroundColor).toContain('color-mix')
    expect(second?.querySelector('span')?.style.color).toBe('rgb(220, 38, 38)')
    expect(second).toHaveTextContent('−$21,340.00')
    expect(third).toHaveClass('heroSm:[&:nth-child(3)]:hidden')
  })

  it('keeps every SVG inside an aria-hidden subtree or decorative', () => {
    renderMock()
    const svgs = Array.from(document.querySelectorAll('svg'))

    expect(svgs.length).toBeGreaterThan(0)
    for (const svg of svgs) {
      expect(svg.closest('[aria-hidden="true"]') ?? svg).toBeTruthy()
    }
    expect(document.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
  })
})
