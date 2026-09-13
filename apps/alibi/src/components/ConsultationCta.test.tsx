import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConsultationCta } from './ConsultationCta'

describe('ConsultationCta', () => {
  it('renders the heading and CTA button', () => {
    render(<ConsultationCta />)
    expect(screen.getByRole('heading', { name: /Request Free Consultation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Let/i })).toBeInTheDocument()
  })
})
