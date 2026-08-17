import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders three service cells with icon, title, and blurb', () => {
    render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(SERVICES.length)
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }
  })
})
