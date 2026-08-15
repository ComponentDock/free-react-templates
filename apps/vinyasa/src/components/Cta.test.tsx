import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('shows the membership headline, paragraph, and button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { name: /Ready to start your fitness journey/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join Vinyasa today/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become a Member' })).toBeInTheDocument()
  })
})
