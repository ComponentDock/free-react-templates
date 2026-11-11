import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteFooter } from './SiteFooter'
import { COMPONENT_DOCK } from '../content'

describe('SiteFooter', () => {
  it('carries exactly one branded link to Component Dock', () => {
    render(<SiteFooter />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
