import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ImagesShowcase } from './ImagesShowcase'
import { TypographyShowcase } from './TypographyShowcase'

describe('TypographyShowcase', () => {
  it('renders the header scale, paragraph, quote and tint samples', () => {
    render(<TypographyShowcase />)

    for (const level of [1, 2, 3, 4, 5, 6]) {
      expect(screen.getByText(`Header ${level}`)).toBeInTheDocument()
      expect(screen.getByText(`Thinking in textures ${level}`)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Paragraph' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Quote' })).toBeInTheDocument()
    expect(screen.getByText('Jordan Vale, Web Designer')).toBeInTheDocument()
    expect(screen.getByText('Muted Text')).toBeInTheDocument()
    expect(screen.getByText('Danger Text')).toBeInTheDocument()
    expect(screen.getByText(/Header with small subtitle/).textContent).toContain(
      'Use the small tag for the headers',
    )
  })
})

describe('ImagesShowcase', () => {
  it('renders the rounded, circle and raised circle treatments with captions', () => {
    render(<ImagesShowcase />)

    expect(screen.getByAltText('Rounded Image example')).toHaveClass('rounded-lg')
    expect(screen.getByAltText('Circle Image example')).toHaveClass('rounded-full')
    expect(screen.getByAltText('Circle Raised example')).toHaveClass('shadow-raised')
    expect(screen.getAllByText('Rowan Ellis')).toHaveLength(3)
    expect(screen.queryByText('Clyde Ford')).not.toBeInTheDocument()
  })
})
