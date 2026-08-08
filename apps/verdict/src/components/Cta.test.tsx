import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('shows the headline and the consultation button', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Discuss Your Legal Matter?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request Free Consultation' })).toBeInTheDocument()
  })

  it('lists the free, no-obligation and confidential assurances', () => {
    render(<Cta />)

    expect(screen.getByText('Free initial consultation')).toBeInTheDocument()
    expect(screen.getByText('No obligation')).toBeInTheDocument()
    expect(screen.getByText('completely confidential')).toBeInTheDocument()
    expect(screen.getByText('in-person or virtual')).toBeInTheDocument()
  })
})
