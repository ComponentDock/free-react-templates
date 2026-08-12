import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesStrip } from './ServicesStrip'
import { SERVICES } from '../data'

describe('ServicesStrip', () => {
  it('renders four service cards with titles and blurbs', () => {
    render(<ServicesStrip />)
    expect(screen.getByRole('region', { name: 'University services' })).toBeInTheDocument()
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 2, name: service.title })).toBeInTheDocument()
    }
    // all four cards share the same blurb copy
    expect(screen.getAllByText(SERVICES[0]!.blurb)).toHaveLength(SERVICES.length)
  })
})
