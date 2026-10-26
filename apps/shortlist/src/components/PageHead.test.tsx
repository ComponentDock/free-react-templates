import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHead } from './PageHead'

function savedLine() {
  return screen.getByText(
    (_, element) => element?.tagName === 'P' && element.textContent?.startsWith('Saved jobs:') === true,
  )
}

describe('PageHead', () => {
  it('renders the title, the sub-line and the live saved figure', () => {
    render(<PageHead savedCount={1} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Design & product roles')
    expect(heading.className).toContain('text-[clamp(26px,3.4vw,36px)]')
    expect(heading.className).toContain('font-extrabold')
    expect(heading.className).toContain('tracking-[-.02em]')

    expect(screen.getByText('128 open positions · updated today')).toBeInTheDocument()

    const line = savedLine()
    expect(line.textContent).toBe('Saved jobs: 1')
    expect(line.className).toContain('text-[15px]')
    expect(line.className).toContain('font-medium')
    expect(line.querySelector('strong')?.textContent).toBe('1')
  })

  it('renders the count as a prop, not as captured text', () => {
    const { rerender } = render(<PageHead savedCount={3} />)
    expect(savedLine().textContent).toBe('Saved jobs: 3')

    rerender(<PageHead savedCount={0} />)
    expect(savedLine().textContent).toBe('Saved jobs: 0')
  })

  it('hides the bookmark glyph from assistive tech', () => {
    const { container } = render(<PageHead savedCount={2} />)

    const glyphs = container.querySelectorAll('svg')
    expect(glyphs).toHaveLength(1)
    expect(glyphs[0]!.getAttribute('aria-hidden')).toBe('true')
    expect(glyphs[0]!.getAttribute('width')).toBe('18')
  })
})
