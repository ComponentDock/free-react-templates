import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from '../components/Areas'
import { Industries } from '../components/Industries'
import { Process } from '../components/Process'
import { Scope } from '../components/Scope'
import { WhyUs } from '../components/WhyUs'
import { AREAS, INDUSTRIES, PROCESS, SCOPE, WHY_US } from '../content'

describe('Scope', () => {
  it('renders eleven rows with a two-fifths task column and a mono frequency', () => {
    render(<Scope />)
    const rows = screen.getAllByTestId('scope-row')

    expect(rows).toHaveLength(11)
    expect(SCOPE.rows).toHaveLength(11)
    expect(rows[0]).toHaveClass('px-6', 'py-4')
    expect(rows[1]).toHaveClass('bg-ink-50/60')
    expect(rows[2]).not.toHaveClass('bg-ink-50/60')

    const task = screen.getByText('Trash and recycling')
    expect(task.tagName).toBe('DT')
    expect(task).toHaveClass('sm:col-span-2', 'font-bold')

    const frequency = screen.getByText(SCOPE.rows[0][1])
    expect(frequency.tagName).toBe('DD')
    expect(frequency).toHaveClass('font-mono', 'sm:col-span-3')
  })

  it('keeps the neutral eyebrow and the header row on the band', () => {
    render(<Scope />)

    expect(screen.getByText(SCOPE.eyebrow)).toHaveClass('text-ink-500')
    expect(screen.getByText(SCOPE.header)).toHaveClass('bg-ink-50', 'px-6', 'py-4')
    expect(screen.getByText(SCOPE.note)).toHaveClass('text-ink-400')
    expect(screen.getByText(SCOPE.title)).toHaveClass('text-ink-800')
  })
})

describe('Industries', () => {
  it('builds one hairline grid with six white cells and aligned rates', () => {
    const { container } = render(<Industries />)
    const grid = container.querySelector('#industries .grid') as HTMLElement
    const cells = screen.getAllByTestId('industry-cell')

    expect(grid).toHaveClass('gap-px', 'bg-ink-100', 'sm:grid-cols-2', 'lg:grid-cols-3')
    expect(cells).toHaveLength(6)

    cells.forEach((cell) => {
      expect(cell).toHaveClass('flex', 'flex-col', 'bg-white', 'p-8')
      expect(cell.querySelector('p')).toHaveClass('flex-1')
    })

    INDUSTRIES.cells.forEach((cell) => {
      expect(screen.getByText(cell.title)).toHaveClass('text-lg', 'font-bold')
      expect(screen.getByText(`From ${cell.rate}c per sq ft per month`)).toHaveClass(
        'text-primary-700',
      )
    })

    expect(screen.getByText(INDUSTRIES.note)).toBeInTheDocument()
  })
})

describe('WhyUs', () => {
  it('draws five weeks of cover with amber crew chips and dark relief chips', () => {
    render(<WhyUs />)
    const panel = screen.getByTestId('roster-panel')

    expect(panel).toHaveAttribute('role', 'img')
    expect(panel).toHaveClass('rounded-2xl')

    expect(screen.getAllByTestId('roster-chip')).toHaveLength(25)
    expect(panel.querySelectorAll('[data-relief="true"]')).toHaveLength(4)
    expect(panel.querySelectorAll('[data-relief="false"]')).toHaveLength(21)
    expect(panel).toHaveTextContent('The same crew, twelve months')
    expect(panel).toHaveTextContent('Mon')
    expect(panel).toHaveTextContent(WHY_US.panelCaption)
    expect(screen.getByText(WHY_US.caption)).toHaveClass('text-ink-400')
  })

  it('rules four arguments with a two-pixel amber border', () => {
    render(<WhyUs />)
    const titles = WHY_US.rules.map((rule) => screen.getByText(rule.title))

    expect(titles).toHaveLength(4)
    titles.forEach((title) => {
      const entry = title.parentElement as HTMLElement
      expect(entry).toHaveClass('border-l-2', 'border-primary-600', 'pl-5')
      expect(title.tagName).toBe('DT')
    })
    expect(screen.getByText(WHY_US.rules[0].body).tagName).toBe('DD')
  })
})

describe('Process', () => {
  it('renders four numbered steps in a three-column list', () => {
    const { container } = render(<Process />)
    const list = container.querySelector('ol') as HTMLElement
    const steps = screen.getAllByTestId('step')

    expect(list).toHaveClass('sm:grid-cols-3', 'gap-8', 'sm:gap-6')
    expect(steps).toHaveLength(4)
    expect(steps.map((step) => step.querySelector('span')?.textContent)).toEqual([
      '01',
      '02',
      '03',
      '04',
    ])
    expect(steps[0]?.querySelector('span')).toHaveClass('tabular-nums', 'text-primary-600')
  })

  it('prints each step title, blurb and duration tag', () => {
    render(<Process />)

    PROCESS.steps.forEach((step) => {
      expect(screen.getByText(step.title)).toHaveClass('text-lg', 'font-bold')
      expect(screen.getByText(step.body)).toBeInTheDocument()
      expect(screen.getByText(step.tag)).toHaveClass('text-primary-700')
    })
  })
})

describe('Areas', () => {
  it('lists fourteen towns without an eyebrow', () => {
    const { container } = render(<Areas />)
    const towns = screen.getAllByTestId('town')

    expect(towns).toHaveLength(14)
    expect(towns.map((town) => town.textContent)).toEqual(AREAS.towns)
    expect(towns[0]).toHaveClass('border-b', 'py-2.5', 'text-ink-700')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(AREAS.title)
    expect(container.querySelectorAll('p.text-sm')).toHaveLength(1)
    expect(screen.getByText(AREAS.note)).toHaveClass('text-ink-400')
    expect(screen.getByText(AREAS.lead)).toHaveClass('text-lg')
  })
})
