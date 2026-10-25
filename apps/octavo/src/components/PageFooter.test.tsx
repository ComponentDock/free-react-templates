import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('credits Component Dock and nothing else', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('More templates at Component Dock')

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveClass('font-semibold', 'underline', 'underline-offset-4')
  })

  it('is one line of small print on the paper ground, not a footer plate', () => {
    render(<PageFooter />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('px-4', 'pb-8', 'text-center', 'text-xs', 'text-muted')
    expect(footer.children).toHaveLength(1)
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })
})
