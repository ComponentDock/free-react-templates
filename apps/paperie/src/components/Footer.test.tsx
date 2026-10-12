import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_ADDRESS,
  FOOTER_COLUMNS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  INSTAGRAM,
  INSTAGRAM_HEADING,
} from '../lib/site'
import { Footer } from './Footer'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the foot of the page', () => {
  it('sets the wordmark, the studio details and two columns of links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: `${BRAND} — back to the top` }).textContent).toBe(`${BRAND}.`)
    expect(screen.getByText(FOOTER_EMAIL)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_PHONE)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ADDRESS)).toBeInTheDocument()

    for (const column of FOOTER_COLUMNS) {
      const heading = screen.getByRole('heading', { level: 4, name: column.heading })

      expect(tokens(heading)).toContain('uppercase')
      expect(tokens(heading)).toContain('mb-[38px]')

      for (const link of column.links) {
        expect(screen.getByRole('heading', { name: column.heading }).parentElement).toContainElement(
          screen.getByRole('link', { name: link }),
        )
      }
    }

    const links = screen.getAllByRole('link', { name: /^(How do I reply\?|The stationer)$/ })

    expect(links).toHaveLength(2)
    expect(tokens(links[0] as Element)).toContain('text-footlink')
    expect(tokens(links[0] as Element)).toContain('hover:pl-[5px]')
  })

  it('shows six recent frames in a three-across grid', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: INSTAGRAM_HEADING })).toBeInTheDocument()

    const grid = screen.getByTestId('instagram-grid')

    expect(within(grid).getAllByRole('listitem')).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)

    const first = within(grid).getAllByRole('link')[0] as HTMLElement

    expect(first).toHaveAttribute('aria-label', INSTAGRAM[0]!.caption)
    expect(first.textContent).toBe('')
  })

  it('closes on a hairline over the credit line, with the current year and Component Dock', () => {
    const { container } = render(<Footer />)

    const credit = screen.getByText(new RegExp(`${new Date().getFullYear()}`))

    expect(credit.textContent).toContain(BRAND)
    expect(tokens(credit)).toContain('text-story')

    const dock = screen.getByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(dock).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')

    const external = Array.from(container.querySelectorAll('a[href^="http"]'))

    expect(external).toHaveLength(1)
    expect(tokens(screen.getByRole('contentinfo'))).toContain('bg-foot-bg')
  })
})
