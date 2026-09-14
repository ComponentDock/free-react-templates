import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders "04 Selected Clients" subhead', () => {
    render(<Clients />)
    expect(screen.getByText('Selected Clients')).toBeInTheDocument()
  })

  it('renders 8 client logos', () => {
    render(<Clients />)
    const clientNames = [
      'Atom',
      'Dropbox',
      'Firefox',
      'GitHub',
      'Mozilla',
      'Linux',
      'Ubuntu',
      'Sass',
    ]
    for (const name of clientNames) {
      expect(screen.getByText(name, { selector: '.sr-only' })).toBeInTheDocument()
    }
  })
})
