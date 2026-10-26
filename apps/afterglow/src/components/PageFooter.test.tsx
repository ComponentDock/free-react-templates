import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'
import { COMPONENT_DOCK_URL, FOOTER } from '../data/hero'

describe('PageFooter', () => {
  it('links Component Dock and nothing else', () => {
    render(<PageFooter />)
    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(1)
    expect(links[0]).toHaveTextContent(FOOTER.linkLabel)
    expect(links[0]).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(screen.getByRole('contentinfo')).toHaveTextContent(FOOTER.prefix)
  })
})
