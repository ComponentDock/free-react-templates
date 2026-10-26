import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock in one quiet line', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(footer.querySelectorAll('a')).toHaveLength(1)
    expect(footer.className).toContain('text-center')
  })

  it('links the Component Dock home page', () => {
    render(<PageFooter />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
