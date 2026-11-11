import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FOOTER } from '../data/site'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links Component Dock and nothing else', () => {
    render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(links[0]).toHaveTextContent(FOOTER.linkLabel)
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(footer.textContent).not.toMatch(/colorlib/i)
  })
})
