import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock and nothing else', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).toContain('More templates at')
    expect(footer.textContent).toContain('Component Dock')

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
