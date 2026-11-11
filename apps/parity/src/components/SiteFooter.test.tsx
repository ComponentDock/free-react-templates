import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK } from '../content'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('ends the page with one branded strip pointing at Component Dock', () => {
    const { container } = render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('pt-footer')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
    expect(container.querySelectorAll('a')).toHaveLength(1)
    expect(footer).toHaveTextContent('More templates at Component Dock')
  })
})
