import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline and both call-to-action buttons', () => {
    render(<Cta />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Ready for Your Best Cut Yet/)

    expect(screen.getByRole('link', { name: /Book Now/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 741-2580/ })).toBeInTheDocument()
  })
})
