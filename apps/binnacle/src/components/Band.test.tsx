import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Band } from './Band'
import { BAND_HEADING, BAND_HEADING_ID, SEARCH_LABEL } from '../lib/site'
import { bandClass, bandColumnClass, bandHeadingClass, bandRowClass } from '../lib/styles'

describe('Band — the heading band, the strip and the bar', () => {
  it('opens the page with the design’s own 112px band, with no gutters of its own', () => {
    render(<Band query="" onQuery={() => {}} />)

    const band = screen.getByTestId('band')

    expect(band.tagName).toBe('SECTION')
    expect(band.className).toBe(bandClass)
    expect(band.className).toBe('py-28')
    expect(band).toHaveAttribute('aria-labelledby', BAND_HEADING_ID)
    expect(band).not.toHaveClass('px-4')
  })

  it('centres its own heading in half the page from 768px up', () => {
    render(<Band query="" onQuery={() => {}} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveAttribute('id', BAND_HEADING_ID)
    expect(heading.textContent).toBe(BAND_HEADING)
    expect(heading.className).toBe(bandHeadingClass)
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-black')

    const column = heading.parentElement as HTMLElement

    expect(column.className).toBe(bandColumnClass)
    expect(column.className).toContain('mb-12')
    expect(column.className).toContain('md:flex-[0_0_50%]')
    expect((column.parentElement as HTMLElement).className).toBe(bandRowClass)
  })

  it('holds the dark strip and then the white bar, both full-bleed, in the same band', () => {
    render(<Band query="" onQuery={() => {}} />)

    const band = screen.getByTestId('band')
    const strip = screen.getByTestId('strip')
    const bar = screen.getByTestId('bar')

    expect(band).toContainElement(strip)
    expect(band).toContainElement(bar)
    expect(strip.compareDocumentPosition(bar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(strip.parentElement).toBe(band)
    expect(bar.parentElement).toBe(band)
  })

  it('hands the field’s query straight through to the bar’s own search box', async () => {
    const user = userEvent.setup()
    const onQuery = vi.fn()

    render(<Band query="pencil" onQuery={onQuery} />)

    const field = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    expect(field).toHaveValue('pencil')

    await user.type(field, 's')

    expect(onQuery).toHaveBeenCalledTimes(1)
  })
})
