import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the emergency headline and both call-to-action links', () => {
    render(<Cta />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Dental Emergency/)

    expect(screen.getByRole('link', { name: /Call Now/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book Online/ })).toBeInTheDocument()
  })
})
