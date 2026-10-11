import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypographyShowcase } from './TypographyShowcase'

describe('TypographyShowcase', () => {
  it('renders the full type scale with its sample copy', () => {
    render(<TypographyShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Typography' })).toBeInTheDocument()
    for (const level of [1, 2, 3, 4, 5, 6] as const) {
      expect(
        screen.getByRole('heading', { level, name: new RegExp(`Header ${level}`) }),
      ).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Paragraph' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Quote' })).toBeInTheDocument()
    expect(screen.getByText('— Jason Hodson, Web Designer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Text styles' })).toBeInTheDocument()
    expect(screen.getByText('Muted Text').parentElement!.className).toContain('text-body/70')
    expect(screen.getByText('Primary Text').parentElement!.className).toContain('text-primary-500')
    expect(screen.getByText('Danger Text').parentElement!.className).toContain('text-danger')
    expect(screen.getByRole('heading', { level: 3, name: 'Small Tag' })).toBeInTheDocument()
    expect(screen.getByText(/Use the small tag for the headers/)).toBeInTheDocument()
  })
})
