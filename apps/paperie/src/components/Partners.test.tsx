import { render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { PARTNERS, PARTNERS_HEADING } from '../lib/site'
import { Partners } from './Partners'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

function stubMotion(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

function firstRow(): HTMLElement {
  return screen.getAllByTestId('partners-row')[0] as HTMLElement
}

afterEach(() => {
  stubMotion(false)
})

describe('the partners row', () => {
  it('sets five marks, each with its own glyph and name', () => {
    render(<Partners />)

    expect(screen.getByRole('heading', { level: 2, name: PARTNERS_HEADING })).toBeInTheDocument()

    const row = firstRow()

    expect(within(row).getAllByTestId('partner-mark')).toHaveLength(5)
    expect(screen.getAllByTestId('partner-mark')).toHaveLength(10)

    for (const partner of PARTNERS) {
      expect(within(row).getByText(partner.name)).toBeInTheDocument()
    }

    const marks = within(row).getAllByTestId('partner-mark')

    for (const mark of marks) {
      expect(tokens(mark)).toContain('h-[171px]')
      expect(tokens(mark)).toContain('w-[170px]')
      expect(mark.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    }
  })

  it('hides the second copy of the row that makes the drift seamless', () => {
    render(<Partners />)

    const rows = screen.getAllByTestId('partners-row')

    expect(rows).toHaveLength(2)
    expect(rows[0]).not.toHaveAttribute('aria-hidden')
    expect(rows[1]).toHaveAttribute('aria-hidden', 'true')
  })

  it('drifts the row slowly and holds it still under the pointer', () => {
    const { container } = render(<Partners />)
    const row = container.querySelector('.partners-row') as HTMLElement

    expect(tokens(container.querySelector('.partners-track') as Element)).toContain('partners-track')
    expect(tokens(row)).toContain('overflow-hidden')
    expect(row).toHaveClass('partners-row')
  })

  it('leaves the row standing when motion is unwanted', () => {
    stubMotion(true)
    const { container } = render(<Partners />)

    expect(container.querySelectorAll('.partners-track')).toHaveLength(0)
    expect(tokens(container.querySelector('.flex.w-max') as Element)).toContain('w-max')
  })
})
