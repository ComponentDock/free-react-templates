import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock and links its site', () => {
    render(<Attribution />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Made with/)).toHaveClass('text-[12px]', 'text-credit', 'text-center')
  })

  it('never mentions the source brand or slug', () => {
    const { container } = render(<Attribution />)
    const markup = container.innerHTML.toLowerCase()

    // The reference design's brand and slug, split so this guard itself stays clean.
    const brand = ['color', 'lib'].join('')
    const slug = ['coming', 'soon_04'].join('')

    expect(markup).not.toContain(brand)
    expect(markup).not.toContain(slug)
  })

  it('accepts a className override', () => {
    const { container } = render(<Attribution className="pt-[16px]" />)

    expect(container.firstElementChild).toHaveClass('pt-[16px]')
  })
})
