import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock in one line of small print', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })

  it('links the Component Dock site, not an external attribution', () => {
    render(<PageFooter />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sits quiet under the band: 13px, muted ink, centred', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('text-[13px]')
    expect(footer.className).toContain('text-ink/60')
    expect(footer.className).toContain('text-center')
  })
})
