import { render, screen } from '@testing-library/react'
import { ContentBand } from './ContentBand'
import { ColBlock } from './ColBlock'
import { LeadBlock } from './LeadBlock'
import { TwoColumn } from './TwoColumn'
import { BAND_HEADING, BAND_LEAD, COLUMNS } from '../lib/site'
import {
  bandClass,
  bandContainerClass,
  bandHeadingClass,
  bandLeadClass,
  bandRowClass,
  colBlockClass,
  colHeadingClass,
  leadBlockClass,
} from '../lib/styles'

describe('ContentBand — the band at the head of the column', () => {
  it('carries the design’s own band: a 24px head, a 112px tail and 48px of air under it', () => {
    render(<ContentBand />)

    const band = screen.getByTestId('band')

    expect(band.tagName).toBe('SECTION')
    expect(band.className).toBe(bandClass)
    expect(band.className).toContain('pt-6')
    expect(band.className).toContain('pb-28')
    expect(band.className).toContain('mb-12')
  })

  it('runs its fluid container edge-to-edge from 768px up and 16px wide below it', () => {
    render(<ContentBand />)

    const container = screen.getByTestId('band').firstElementChild as HTMLElement

    expect(container.className).toBe(bandContainerClass)
    expect(container.className).toContain('px-4')
    expect(container.className).toContain('md:px-0')
    // No max-width tier belongs to this band.
    expect(container.className).not.toContain('max-w-')

    expect(container.firstElementChild?.className).toBe(bandRowClass)
  })

  it('stacks the lead block and the two sub-blocks in the design’s own order', () => {
    render(<ContentBand />)

    const row = screen.getByTestId('band').firstElementChild?.firstElementChild as HTMLElement

    expect(row.className).toBe(bandRowClass)
    expect(row.children[0]).toBe(screen.getByTestId('lead'))
    expect(screen.getByTestId('lead').className).toBe(leadBlockClass)
    expect(screen.getByTestId('lead').className).toContain('mb-6')
    expect(row.children[1]).toBe(screen.getByTestId(`column-${COLUMNS[0]!.heading}`))
    expect(row.children[2]).toBe(screen.getByTestId(`column-${COLUMNS[1]!.heading}`))
  })
})

describe('LeadBlock — the page’s single heading', () => {
  it('drops the design’s 32px heading over its lead paragraph, with the app’s own copy', () => {
    render(<LeadBlock />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading.textContent).toBe(BAND_HEADING)
    expect(heading.className).toBe(bandHeadingClass)
    expect(heading.className).toContain('text-[32px]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('text-heading')
    expect(heading.className).toContain('mb-2')

    const lead = screen.getByText(BAND_LEAD)

    expect(lead.tagName).toBe('P')
    expect(lead.className).toBe(bandLeadClass)
    expect(lead.className).toContain('mb-4')
  })
})

describe('TwoColumn — the sub-blocks beside the lead', () => {
  it('draws one block per column the model declares, in the model’s own order', () => {
    render(<TwoColumn />)

    for (const column of COLUMNS) {
      expect(screen.getByTestId(`column-${column.heading}`)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual(
      COLUMNS.map((column) => column.heading),
    )
  })
})

describe('ColBlock — one sub-block', () => {
  it('is half the row from 768px up, the whole of it below, on the design’s 24px heading', () => {
    const column = COLUMNS[0]!

    const { container } = render(<ColBlock column={column} />)

    const block = container.firstElementChild as HTMLElement

    expect(block.className).toBe(colBlockClass)
    expect(block.className).toContain('w-full')
    expect(block.className).toContain('md:max-w-[50%]')
    expect(block.className).toContain('md:flex-[0_0_50%]')
    expect(block.className).toContain('px-[15px]')

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading.textContent).toBe(column.heading)
    expect(heading.className).toBe(colHeadingClass)
    expect(heading.className).toContain('text-[24px]')
    expect(heading.className).toContain('font-normal')

    expect(screen.getByText(column.body).tagName).toBe('P')
  })
})
