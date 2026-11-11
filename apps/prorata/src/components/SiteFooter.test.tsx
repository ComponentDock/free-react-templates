import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK } from '../content'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('is one branded line linking Component Dock', () => {
    const { container } = render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('pr-footer')
    expect(footer).toBe(container.firstElementChild)
    expect(screen.getByRole('link')).toHaveTextContent('Component Dock')
  })

  it('opens the link safely in a new tab', () => {
    render(<SiteFooter />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })
})
