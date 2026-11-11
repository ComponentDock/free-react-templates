import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, FOOTER } from '../data/site'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links the marketplace and nothing else', () => {
    render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(FOOTER.prefix)

    const link = screen.getByRole('link', { name: FOOTER.linkLabel })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(footer).toContainElement(link)
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })
})
