import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Agreement, Areas, Sectors } from '../components/Grids'
import { CellGrid } from '../components/CellGrid'
import { INCLUSIONS, SECTORS, SERVICE_TOWNS } from '../data'

describe('CellGrid', () => {
  it('renders one white cell per item over the hairline gutter', () => {
    render(<CellGrid cells={INCLUSIONS} />)

    const grid = screen.getByRole('heading', { level: 3, name: 'Filters and belts' }).parentElement
      ?.parentElement
    expect(grid).toHaveClass('gap-px', 'bg-ink-100', 'rounded-2xl', 'overflow-hidden')
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(INCLUSIONS.length)
  })
})

describe('Agreement', () => {
  it('lists the six inclusions in the reference order with their badges', () => {
    render(<Agreement />)

    const titles = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(titles).toEqual(INCLUSIONS.map((cell) => cell.title))
    expect(screen.getAllByText('In the monthly fee')).toHaveLength(5)
    expect(screen.getByText('Quoted per job')).toBeInTheDocument()
    expect(screen.getByText(/Sample inclusions for demonstration/)).toBeInTheDocument()
  })

  it('keeps the white ground and the section rhythm', () => {
    render(<Agreement />)

    const section = document.getElementById('agreement')
    expect(section).toHaveClass('bg-white', 'section')
    expect(section).toHaveAttribute('id', 'agreement')
  })
})

describe('Sectors', () => {
  it('labels medical as priority one even though it is listed last', () => {
    render(<Sectors />)

    expect(screen.getAllByText('Priority one by default')).toHaveLength(3)
    expect(screen.getAllByText('Priority two, upgradeable')).toHaveLength(2)
    expect(screen.getByText('Quoted per site')).toBeInTheDocument()

    const medical = screen.getByRole('heading', { level: 3, name: 'Medical and dental' })
    expect(medical.parentElement?.textContent).toContain('Priority one by default')
    expect(screen.getByText(/Sample sectors for demonstration/)).toBeInTheDocument()
  })

  it('renders all six building types', () => {
    render(<Sectors />)

    SECTORS.forEach((sector) => {
      expect(screen.getByRole('heading', { level: 3, name: sector.title })).toBeInTheDocument()
    })
  })
})

describe('Areas', () => {
  it('lists the twelve towns in order as hairline rows', () => {
    render(<Areas />)

    const towns = SERVICE_TOWNS.map((town) => screen.getByText(town))
    expect(towns[0]).toHaveClass('border-b', 'border-ink-100', 'py-2.5')
    expect(screen.getByRole('heading', { level: 2, name: 'Where we work' })).toBeInTheDocument()
    expect(screen.getByText('North Richland Hills')).toBeInTheDocument()
    expect(screen.getByText(/Replace this list with your own towns/)).toBeInTheDocument()
  })

  it('keeps the two-to-three column ladder', () => {
    render(<Areas />)

    const list = screen.getByText('Fort Worth').parentElement
    expect(list).toHaveClass('grid-cols-2', 'sm:grid-cols-3')
  })
})
