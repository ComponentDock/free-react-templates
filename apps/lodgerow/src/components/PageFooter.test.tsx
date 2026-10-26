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

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('stays in the 13px muted footnote style so the page reads as one band', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('text-[13px]')
    expect(footer.className).toContain('text-muted')
    expect(footer.className).toContain('text-center')
  })
})
