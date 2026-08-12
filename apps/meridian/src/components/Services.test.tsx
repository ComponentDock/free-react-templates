import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SERVICES } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, headline and three icon cards with distinct copy', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What we do best' })).toBeInTheDocument()
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.paragraph)).toBeInTheDocument()
    }
    expect(document.querySelectorAll('svg')).toHaveLength(SERVICES.length)
  })
})
