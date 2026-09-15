import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('How Could You Help')).toBeInTheDocument()
    expect(screen.getByText('Awesome Feature')).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Give Donation')).toBeInTheDocument()
    expect(screen.getByText('Become A Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Child Education')).toBeInTheDocument()
    expect(screen.getByText('Quick Fundraise')).toBeInTheDocument()
  })
})
