import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock in one line of small print', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })

  it('links the Component Dock site', () => {
    render(<PageFooter />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('is not styled as a fourth plan', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.querySelector('article')).toBeNull()
    expect(footer.getAttribute('style')).toBeNull()
  })
})
