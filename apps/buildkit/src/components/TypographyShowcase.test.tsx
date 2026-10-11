import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypographyShowcase } from './TypographyShowcase'

describe('TypographyShowcase', () => {
  it('renders the header scale, quote and text samples', () => {
    const { container } = render(<TypographyShowcase />)

    expect(container.querySelector('section')!.id).toBe('typography')
    for (let level = 1; level <= 6; level += 1) {
      expect(
        screen.getByRole('heading', { name: `Header ${level} Thinking in textures` }),
      ).toBeInTheDocument()
    }

    expect(screen.getAllByText('Thinking in textures')).toHaveLength(6)
    expect(screen.getByText('— Jason Hodson, Web Designer')).toBeInTheDocument()
    expect(container.querySelector('blockquote')!.className).toContain('border-primary-600')

    for (const sample of [
      'Muted Text',
      'Primary Text',
      'Info Text',
      'Success Text',
      'Warning Text',
      'Danger Text',
    ]) {
      expect(screen.getByText(sample)).toBeInTheDocument()
    }

    expect(screen.getByText('Danger Text').closest('p')!.className).toContain('text-danger')
    expect(screen.getByRole('heading', { name: /Header with small subtitle/ })).toBeInTheDocument()
  })
})
