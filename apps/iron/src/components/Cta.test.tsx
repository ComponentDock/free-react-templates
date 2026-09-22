import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading and button', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { level: 2, name: /huge transaction/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /become a member/i })).toBeInTheDocument()
  })
})
