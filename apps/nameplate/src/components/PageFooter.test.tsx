import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('keeps the attribution to one line of small print on the sand ground', () => {
    const { container } = render(<PageFooter />)
    const footer = container.querySelector('footer')

    expect(footer).toHaveClass('px-4', 'pb-8', 'text-center', 'text-xs', 'text-muted')
    expect(footer).not.toHaveClass('border-t')
  })

  it('links Component Dock as the only destination', () => {
    const { container } = render(<PageFooter />)
    const anchors = container.querySelectorAll('a')

    expect(anchors).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/More templates at/i)).toBeInTheDocument()
  })
})
