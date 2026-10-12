import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopChrome } from './TopChrome'
import { CHANNELS, SEARCH_LABEL, SITE_NAME, SOCIAL_LABEL } from '../lib/site'
import {
  brandColumnClass,
  brandRowClass,
  chromeClass,
  chromeRowClass,
  searchCellClass,
  socialColumnClass,
} from '../lib/styles'

describe('TopChrome — the fluid row above the bar', () => {
  it('fills the viewport with no container tier at all, on the design’s own gutters', () => {
    render(<TopChrome query="" onChange={() => {}} />)

    const chrome = screen.getByTestId('chrome')

    expect(chrome.className).toBe(chromeClass)
    expect(chrome.className).toContain('w-full')
    expect(chrome.className).toContain('px-[15px]')
    expect(chrome.className).toContain('md:px-[48px]')
    // The sibling templates' centred tiers (540/720/960/1140) have no place in a fluid row.
    expect(chrome.className).not.toContain('max-w')
    expect(chrome.className).not.toContain('mx-auto')
  })

  it('draws the circles at the left and the wordmark with its field at the right', () => {
    render(<TopChrome query="" onChange={() => {}} />)

    const row = screen.getByTestId('chrome').firstElementChild as HTMLElement

    expect(row.className).toBe(chromeRowClass)

    const social = row.children[0] as HTMLElement
    const brand = row.children[1] as HTMLElement

    expect(social.className).toBe(socialColumnClass)
    expect(brand.className).toBe(brandColumnClass)
    expect(social.className).toContain('md:max-w-[33.33333%]')
    // The design's own order:13 on the wordmark's column, which is what keeps the row the right
    // way round instead of inverting it into a lockup on the left.
    expect(brand.className).toContain('md:order-last')
    expect(brand.className).toContain('md:max-w-[66.66667%]')

    expect(social.querySelector('ul')).toBe(screen.getByRole('list', { name: SOCIAL_LABEL }))
    expect(brand.querySelector('a')).toBe(screen.getByRole('link', { name: SITE_NAME }))
  })

  it('puts the field in the second half of the lockup’s own inner row', () => {
    render(<TopChrome query="" onChange={() => {}} />)

    const brand = screen.getByTestId('chrome').querySelectorAll(':scope > div > div')[1] as HTMLElement
    const inner = brand.firstElementChild as HTMLElement

    expect(inner.className).toBe(brandRowClass)
    expect(inner.children[0]?.className).toContain('text-center')
    expect((inner.children[1] as HTMLElement).className).toBe(searchCellClass)
    expect(searchCellClass).toContain('md:justify-end')
    expect(screen.getByRole('searchbox', { name: SEARCH_LABEL })).toBeInTheDocument()
  })

  it('narrows the page from the field it holds', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<TopChrome query="" onChange={onChange} />)

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 'c')

    expect(onChange).toHaveBeenCalledWith('c')
  })

  it('lands every circle on a destination of its own', () => {
    render(<TopChrome query="" onChange={() => {}} />)

    for (const channel of CHANNELS) {
      expect(screen.getByRole('link', { name: channel.label })).toHaveAttribute(
        'href',
        channel.href,
      )
    }
  })
})
