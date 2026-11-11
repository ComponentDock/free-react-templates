import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK } from '../content'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('is one strip holding the single outbound Component Dock link', () => {
    const { container } = render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('lm-footer')
    expect(footer).toBe(container.firstElementChild)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', COMPONENT_DOCK)
    expect(links[0]).toHaveTextContent('Component Dock')
    expect(links[0]).toHaveClass('lm-footer-link')
  })

  it('introduces no other element below the note', () => {
    const { container } = render(<SiteFooter />)

    expect(container.querySelectorAll('p')).toHaveLength(1)
    expect(container.querySelector('p')).toHaveClass('lm-footer-line')
  })
})
