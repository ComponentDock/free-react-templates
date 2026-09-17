import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section number and title', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    for (const title of ['Branding', 'Mobile Apps', 'Web', 'Graphic']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/unique brand identities/i)).toBeInTheDocument()
    expect(screen.getByText(/cross-platform mobile/i)).toBeInTheDocument()
    expect(screen.getByText(/responsive websites/i)).toBeInTheDocument()
    expect(screen.getByText(/graphic design solutions/i)).toBeInTheDocument()
  })
})
