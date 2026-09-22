import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading and Join Now button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { level: 2, name: /a big offer for this summer/i }),
    ).toBeInTheDocument()
    const buttons = screen.getAllByText('Join Now')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the description text', () => {
    render(<Cta />)
    expect(screen.getByText(/join thousands of members/i)).toBeInTheDocument()
  })

  it('has the CTA section landmark', () => {
    render(<Cta />)
    expect(screen.getByRole('region', { name: /call to action/i })).toBeInTheDocument()
  })
})
