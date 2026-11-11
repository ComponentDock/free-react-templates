import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('points back at the marketplace with one branded link', () => {
    render(<SiteFooter />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('contentinfo')).toHaveTextContent('More templates at Component Dock')
  })
})
