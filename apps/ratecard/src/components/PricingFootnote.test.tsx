import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingFootnote } from './PricingFootnote'
import { COMPONENT_DOCK, FOOTNOTE_LINK_LABEL, FOOTNOTE_PREFIX } from '../data/site'

describe('PricingFootnote', () => {
  it('closes the section with the copy and an inline link', () => {
    const { container } = render(<PricingFootnote />)

    const foot = container.querySelector('p.rc-foot')!
    expect(foot.textContent).toBe(`${FOOTNOTE_PREFIX} ${FOOTNOTE_LINK_LABEL}`)

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent(FOOTNOTE_LINK_LABEL)
    expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })
})
