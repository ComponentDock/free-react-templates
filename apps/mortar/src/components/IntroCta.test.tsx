import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroCta } from './IntroCta'
import { introCta } from '../data'

describe('IntroCta', () => {
  it('renders the kicker and heading', () => {
    render(<IntroCta />)
    expect(screen.getByText(introCta.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: introCta.heading })).toBeInTheDocument()
  })

  it('renders the white "Make An Appointment" button', () => {
    render(<IntroCta />)
    expect(screen.getByRole('link', { name: introCta.ctaLabel })).toBeInTheDocument()
  })
})
