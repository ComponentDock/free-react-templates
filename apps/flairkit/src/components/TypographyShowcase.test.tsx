import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypographyShowcase } from './TypographyShowcase'

describe('TypographyShowcase', () => {
  it('renders the band heading and one sample per heading level', () => {
    render(<TypographyShowcase />)

    expect(screen.getByRole('heading', { level: 3, name: 'Typography' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Almost before we knew it, we had left the ground.',
    )
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument()
  })

  it('labels each type row', () => {
    render(<TypographyShowcase />)

    for (const caption of [
      'Heading 1',
      'Heading 2',
      'Heading 3',
      'Heading 4',
      'Heading 5',
      'Heading 6',
      'Paragraph',
      'Quote',
    ]) {
      expect(screen.getByText(caption)).toBeInTheDocument()
    }
  })

  it('renders the quote with a clean attribution', () => {
    const { container } = render(<TypographyShowcase />)

    const quote = container.querySelector('blockquote')

    expect(quote?.className).toContain('border-l-[7px]')
    expect(quote?.querySelector('cite')?.textContent).toBe('Jane Smith, CEO & Founder')
  })

  it('renders the six palette text rows', () => {
    const { container } = render(<TypographyShowcase />)

    for (const className of [
      'text-muted',
      'text-flair-primary',
      'text-flair-info',
      'text-flair-success',
      'text-flair-warning',
      'text-flair-danger',
    ]) {
      expect(container.querySelectorAll(`p.${className}`)).toHaveLength(1)
    }
  })
})
