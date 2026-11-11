import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK } from '../content'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links Component Dock as the page\u2019s only attribution', () => {
    render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(footer).toContainElement(link)
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('target', '_blank')
    expect(footer).toHaveTextContent('More templates at Component Dock')
  })
})
