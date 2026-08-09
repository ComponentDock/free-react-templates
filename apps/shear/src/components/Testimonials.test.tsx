import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Our Top Client Says heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Our Top Client Says' })).toBeInTheDocument()
  })

  it('renders three quotes with author names and initials avatars', () => {
    render(<Testimonials />)
    for (const name of ['Mike Fisher', 'Jean Stanley', 'Katie Rose']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('MF')).toBeInTheDocument()
    expect(screen.getByText('JS')).toBeInTheDocument()
    expect(screen.getByText('KR')).toBeInTheDocument()
  })
})
