import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteFooter } from './SiteFooter'
import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../data/site'

describe('SiteFooter', () => {
  it('names and links Component Dock in one slim line', () => {
    const { container } = render(<SiteFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('rc-footer')
    expect(container.querySelectorAll('p')).toHaveLength(1)

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent(FOOTER_LINK_LABEL)
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')

    const line = container.querySelector('.rc-footer-line')
    expect(line?.textContent).toBe(`${FOOTER_PREFIX} ${FOOTER_LINK_LABEL}`)
  })
})
