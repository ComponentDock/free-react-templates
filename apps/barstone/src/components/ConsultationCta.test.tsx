import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ConsultationCta } from './ConsultationCta'
import { consultation } from '../data'

describe('ConsultationCta', () => {
  it('paints the gold strip and centres the statement', () => {
    render(<ConsultationCta />)
    const heading = screen.getByRole('heading', { level: 2 })
    const band = heading.closest('section') as HTMLElement

    expect(band.id).toBe('contact')
    expect(band).toHaveClass('bg-gold')
    expect(heading.textContent).toBe(consultation.statement)
    expect(heading).toHaveClass('text-white')
  })

  it('offers a white square button whose label turns gold', () => {
    render(<ConsultationCta />)
    const button = screen.getByRole('link', { name: consultation.cta.label })

    expect(button).toHaveAttribute('href', '#contact')
    expect(button.className).toContain('bg-white')
    expect(button.className).toContain('rounded-none')
    expect(button.className).toContain('hover:text-gold')
  })
})
