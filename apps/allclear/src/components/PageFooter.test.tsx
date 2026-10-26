import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter — the one line of attribution', () => {
  it('links Component Dock from the template footer', () => {
    render(<PageFooter />)
    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })

  it('sits below the panel as a single centred line', () => {
    const { container } = render(<PageFooter />)
    const footer = container.querySelector('footer') as HTMLElement

    expect(footer.getAttribute('class')).toContain('mt-6')
    expect(footer.getAttribute('class')).toContain('text-center')
    expect(footer.querySelectorAll('a')).toHaveLength(1)
  })
})
