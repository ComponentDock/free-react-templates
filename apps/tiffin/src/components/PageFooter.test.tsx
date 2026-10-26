import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('attributes the template to Component Dock', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('mt-6')
    expect(footer.className).toContain('text-[13px]')
    expect(footer.className).toContain('text-muted')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link.className).toContain('font-semibold')
    expect(link.className).toContain('underline')
  })

  it('carries no other link or credit', () => {
    render(<PageFooter />)

    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByRole('contentinfo').querySelectorAll('a')).toHaveLength(1)
  })
})
