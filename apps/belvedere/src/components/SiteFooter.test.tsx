import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FOOTER } from '../data/site'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links the marketplace from a single branded line', () => {
    render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(FOOTER.prefix)

    const link = screen.getByRole('link', { name: FOOTER.linkLabel })
    expect(link).toHaveAttribute('href', FOOTER.href)
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })
})
