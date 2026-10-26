import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock in one muted line', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('mt-6')
    expect(footer.className).toContain('text-[13px]')
    expect(footer.className).toContain('text-muted')
    expect(footer.textContent).toContain('More templates at')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
