import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from '../components/Areas'
import { Compare, ComparisonRow } from '../components/Compare'
import { Emergency } from '../components/Emergency'
import { Process } from '../components/Process'
import { Services } from '../components/Services'
import { LinerPanel, WhyUs } from '../components/WhyUs'
import { COMPARE_ROWS, areas, compare, emergency, process, services, site, whyUs } from '../content'

describe('Emergency', () => {
  it('is a terracotta strip with a kicker, one bold line and a white call pill', () => {
    render(<Emergency />)

    expect(screen.getByText(emergency.kicker)).toBeInTheDocument()
    expect(screen.getByText(emergency.headline)).toHaveClass('font-bold')
    expect(screen.getByText(emergency.body)).toHaveClass('max-w-2xl')
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
    expect(screen.getByRole('link', { name: site.phone })).toHaveClass('rounded-full', 'bg-white')
  })
})

describe('Compare', () => {
  it('renders the argument in nine rows with the emphasis the footnote counts', () => {
    render(<Compare />)
    const rows = screen.getAllByTestId('compare-row')

    expect(rows).toHaveLength(9)
    expect(rows.map((row) => row.getAttribute('data-winner'))).toEqual([
      'relining',
      'relining',
      'relining',
      'relining',
      'openCut',
      'openCut',
      'openCut',
      'neutral',
      'relining',
    ])

    expect(COMPARE_ROWS.filter((row) => row.winner === 'relining')).toHaveLength(5)
    expect(COMPARE_ROWS.filter((row) => row.winner === 'openCut')).toHaveLength(3)
    expect(COMPARE_ROWS.filter((row) => row.winner === 'neutral')).toHaveLength(1)

    expect(screen.getByText(compare.counting)).toHaveTextContent(
      'relining wins 5 rows and open cut wins 3',
    )
    expect(screen.getByText(compare.finePrint)).toBeInTheDocument()
  })

  it('bolds exactly one cell in every row except the deliberately neutral eighth', () => {
    render(<Compare />)
    const rows = screen.getAllByTestId('compare-row')

    rows.forEach((row, index) => {
      const bold = Array.from(row.querySelectorAll('p')).filter((cell) =>
        cell.className.includes('font-semibold'),
      )
      const cells = bold.filter((cell) => !cell.className.includes('text-ink-800 md:col-span-4'))
      if (index === 7) {
        expect(cells).toHaveLength(0)
        return
      }
      expect(cells).toHaveLength(1)
    })
  })

  it('labels both columns on mobile and hides the header row below md', () => {
    render(<Compare />)

    expect(screen.getAllByText('Relining').length).toBeGreaterThan(1)
    expect(screen.getAllByText('Open cut').length).toBeGreaterThan(1)
    expect(screen.getByText(compare.title)).toBeInTheDocument()
    expect(screen.getByText(compare.lead)).toBeInTheDocument()
  })

  it('alternates the row ground by index', () => {
    render(<ComparisonRow row={COMPARE_ROWS[0]!} index={0} />)
    expect(screen.getByTestId('compare-row')).not.toHaveClass('bg-ink-50/60')
  })
})

describe('Process', () => {
  it('numbers four steps in order and keeps the fourth on its own row', () => {
    render(<Process />)

    const list = screen.getByRole('list')
    expect(list.tagName).toBe('OL')
    expect(list).toHaveClass('sm:grid-cols-3')
    expect(screen.getAllByRole('listitem')).toHaveLength(4)

    ;['01', '02', '03', '04'].forEach((number) => {
      expect(screen.getByText(number)).toHaveClass('tabular-nums')
    })
    process.steps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument()
      expect(screen.getByText(step.tag)).toHaveClass('text-primary-700')
    })
  })
})

describe('Services', () => {
  it('renders six ruled cells, each with its own starting price', () => {
    render(<Services />)

    services.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.price)).toBeInTheDocument()
    })
    expect(screen.getByText(services.footnote)).toHaveClass('text-ink-400')
  })
})

describe('WhyUs', () => {
  it('draws the panel as an accessible image with its legend', () => {
    render(<LinerPanel className="rounded-2xl" />)

    const panel = screen.getByRole('img', { name: /liner inside an existing pipe/i })
    expect(panel).toHaveAttribute('viewBox', '0 0 800 600')
    expect(panel.querySelector('title')).toHaveTextContent('A pipe inside the pipe')
    expect(screen.getAllByText('access point')).toHaveLength(2)
  })

  it('lists the four rules with a terracotta left rule and the caption', () => {
    render(<WhyUs />)

    whyUs.rules.forEach((rule) => {
      expect(screen.getByText(rule.term)).toBeInTheDocument()
      expect(screen.getByText(rule.detail)).toBeInTheDocument()
    })
    expect(screen.getByText(whyUs.caption)).toHaveClass('text-ink-400')
    expect(screen.getByText(whyUs.title)).toBeInTheDocument()
  })
})

describe('Areas', () => {
  it('names twelve towns in plain text and skips the eyebrow', () => {
    render(<Areas />)

    expect(screen.getAllByRole('listitem')).toHaveLength(12)
    areas.towns.forEach((town) => {
      expect(screen.getByText(town)).toBeInTheDocument()
    })
    expect(screen.getByRole('heading', { level: 2, name: areas.title })).toBeInTheDocument()
    expect(screen.getByText(areas.note)).toBeInTheDocument()
  })
})
