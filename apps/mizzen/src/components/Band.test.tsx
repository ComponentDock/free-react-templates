import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Band } from './Band'
import { BAND_HEADING, BAND_HEADING_ID, SEARCH_LABEL } from '../lib/site'
import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  bandRowClass,
  containerClass,
} from '../lib/styles'

describe('Band — the band the page opens on', () => {
  it('opens on the design’s own 112px of air at both ends, over the grey page', () => {
    render(<Band query="" onQuery={() => {}} />)

    const band = screen.getByTestId('band')

    expect(band.className).toBe(bandClass)
    expect(band.className).toContain('py-28')
    expect(band.className).not.toContain('px-')
  })

  it('centres its own heading in half the page from 768px up', () => {
    render(<Band query="" onQuery={() => {}} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveAttribute('id', BAND_HEADING_ID)
    expect(heading.textContent).toBe(BAND_HEADING)
    expect(heading.className).toBe(bandHeadingClass)
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-black')
    expect(heading.className).toContain('mb-2')
    expect(heading.closest('div')?.className).toBe(bandColumnClass)
    expect(bandColumnClass).toContain('mb-12')
    expect(bandColumnClass).toContain('md:max-w-[50%]')
    expect(heading.closest('div')?.parentElement?.className).toBe(bandRowClass)
    expect(heading.closest('section')?.querySelector(':scope > div')?.className).toBe(
      containerClass,
    )
  })

  it('stands the fluid chrome row above the dark bar, both inside the same band', () => {
    render(<Band query="" onQuery={() => {}} />)

    const band = screen.getByTestId('band')
    const chrome = screen.getByTestId('chrome')
    const bar = screen.getByTestId('bar')

    expect(band.contains(chrome)).toBe(true)
    expect(band.contains(bar)).toBe(true)
    expect(chrome.compareDocumentPosition(bar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(chrome.previousElementSibling?.querySelector('h2')).not.toBeNull()
  })

  it('hands the field’s own query straight through to the chrome row', async () => {
    const user = userEvent.setup()
    const onQuery = vi.fn()

    render(<Band query="" onQuery={onQuery} />)

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 's')

    expect(onQuery).toHaveBeenCalledWith('s')
  })
})
