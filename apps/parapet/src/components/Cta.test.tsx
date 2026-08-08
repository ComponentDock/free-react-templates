import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline and both call-to-action links', () => {
    render(<Cta />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Ready to Start Your Project/)

    expect(screen.getByRole('link', { name: /Get Free Estimate/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call Us Now/ })).toBeInTheDocument()
  })
})
