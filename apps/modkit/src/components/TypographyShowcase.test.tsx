import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypographyShowcase } from './TypographyShowcase'

const SAMPLE = 'Almost before we knew it, we had left the ground.'

describe('TypographyShowcase', () => {
  it('renders the Heading 1–6 scale in descending sizes', () => {
    render(<TypographyShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Typography')
    expect(screen.getAllByText(SAMPLE)).toHaveLength(6)

    const sizes = [1, 2, 3, 4, 5, 6].map(
      (level) => screen.getByText(`Heading ${level}`).nextElementSibling!.className,
    )
    expect(sizes[0]).toContain('text-[2.5rem]')
    expect(sizes[5]).toContain('text-[1rem]')
  })

  it('renders the paragraph, quote, and text-colour samples', () => {
    const { container } = render(<TypographyShowcase />)

    expect(screen.getByText('Paragraph')).toBeInTheDocument()
    expect(screen.getByText('Quote')).toBeInTheDocument()
    expect(container.querySelectorAll('blockquote')).toHaveLength(1)

    expect(screen.getByText('Muted text').className).toContain('text-gray-400')
    expect(screen.getByText('Primary text').className).toContain('text-kit-primary')
    expect(screen.getByText('Info text').className).toContain('text-kit-info')
    expect(screen.getByText('Success text').className).toContain('text-kit-success')
    expect(screen.getByText('Warning text').className).toContain('text-kit-warning')
    expect(screen.getByText('Danger text').className).toContain('text-kit-danger')
  })
})
