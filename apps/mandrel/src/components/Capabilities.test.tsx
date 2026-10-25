import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Capabilities } from './Capabilities'
import { CAPABILITIES, CAPABILITIES_COPY, SECTORS } from '../content'

describe('Capabilities', () => {
  it('is the seven-by-five capability matrix', () => {
    render(<Capabilities />)
    const table = screen.getByRole('table', { name: 'Capabilities by sector' })
    expect(within(table).getAllByRole('row')).toHaveLength(8)
    expect(within(table).getAllByRole('columnheader')).toHaveLength(6)
    expect(within(table).getAllByRole('rowheader')).toHaveLength(7)
  })

  it('keeps the ragged shape: 25 ticks and 10 honest refusals', () => {
    render(<Capabilities />)
    const cells = document.querySelectorAll('td[data-cell]')
    expect(cells).toHaveLength(35)
    const yes = document.querySelectorAll('td[data-cell="yes"]')
    const no = document.querySelectorAll('td[data-cell="no"]')
    expect(yes).toHaveLength(25)
    expect(no).toHaveLength(10)
    yes.forEach((cell) => expect(cell.querySelector('svg')).not.toBeNull())
    no.forEach((cell) => expect(cell.textContent).toContain('—'))
  })

  it('carries every cell as a sentence for assistive technology', () => {
    render(<Capabilities />)
    expect(screen.getByText('Plant room replacement in Healthcare: yes')).toHaveClass('sr-only')
    expect(screen.getByText('Plant room replacement in Commercial: yes')).toBeInTheDocument()
    expect(screen.getByText('Medical gas in Education: no')).toBeInTheDocument()
    expect(screen.getByText('Steam and condensate in Commercial: no')).toBeInTheDocument()
    const sentences = document.querySelectorAll('td[data-cell] > span.sr-only')
    expect(sentences).toHaveLength(35)
  })

  it('hides the decorative tick and dash from the accessibility tree', () => {
    render(<Capabilities />)
    document.querySelectorAll('td[data-cell] svg').forEach((icon) => {
      expect(icon.getAttribute('aria-hidden')).toBe('true')
    })
    document.querySelectorAll('td[data-cell] > span[aria-hidden="true"]').forEach((dash) => {
      expect(dash.textContent).toBe('—')
    })
  })

  it('renders the cohort header row and the band copy', () => {
    render(<Capabilities />)
    SECTORS.forEach((sector) => {
      expect(screen.getByRole('columnheader', { name: sector })).toBeInTheDocument()
    })
    expect(screen.getByRole('heading', { level: 2, name: CAPABILITIES_COPY.heading })).toBeVisible()
    expect(screen.getByText(CAPABILITIES_COPY.lede)).toBeInTheDocument()
    expect(screen.getByText(CAPABILITIES_COPY.footnote)).toBeInTheDocument()
  })

  it('gives every capability row a sticky label so the name survives a scroll', () => {
    render(<Capabilities />)
    CAPABILITIES.forEach((capability) => {
      const header = screen.getByRole('rowheader', { name: capability.name })
      expect(header.className).toContain('sticky')
      expect(header.className).toContain('left-0')
    })
  })

  it('scrolls the table inside its own wrapper rather than the document', () => {
    render(<Capabilities />)
    const table = screen.getByRole('table', { name: 'Capabilities by sector' })
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
    expect(table.className).toContain('min-w-[680px]')
  })

  it('has no controls — the matrix is static', () => {
    render(<Capabilities />)
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('textbox')).toBeNull()
    vi.clearAllMocks()
  })
})
