import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Crowns Bridges')).toBeInTheDocument()
    expect(screen.getByText('Implants')).toBeInTheDocument()
    expect(screen.getByText('Teeth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Root Canals')).toBeInTheDocument()
    expect(screen.getByText('Wisdom Teeth')).toBeInTheDocument()
    expect(screen.getByText('Braces')).toBeInTheDocument()
  })
})
