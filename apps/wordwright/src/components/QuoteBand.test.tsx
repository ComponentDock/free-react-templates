import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuoteBand } from './QuoteBand'
import { quoteBand } from '../data'

describe('QuoteBand', () => {
  it('renders the yellow band with photo, Learn More button, quote and signature', () => {
    const { container } = render(<QuoteBand />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-brand')

    expect(screen.getByRole('img', { name: quoteBand.imageAlt })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: quoteBand.ctaLabel }).className).toContain('bg-accent')
    expect(screen.getByRole('heading', { name: new RegExp(quoteBand.quote) })).toBeInTheDocument()
    expect(screen.getByText(quoteBand.paragraph)).toBeInTheDocument()
    expect(screen.getByText(quoteBand.signature)).toBeInTheDocument()
  })
})
