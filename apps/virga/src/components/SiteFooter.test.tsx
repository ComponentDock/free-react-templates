import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, FOOTER } from '../data/site'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('links the marketplace from one slim line', () => {
    render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(FOOTER.prefix)

    const link = screen.getByRole('link', { name: FOOTER.linkLabel })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('leaves no dead anchor and no second line behind', () => {
    const { container } = render(<SiteFooter />)

    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(container.querySelectorAll('p')).toHaveLength(1)
    expect(container.querySelectorAll('a')).toHaveLength(1)
  })
})
