import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the overline and title centered', () => {
    render(<SectionTitle overline="Upcoming Event" title="Land Morning Blessed" />)

    expect(screen.getByText('Upcoming Event')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Land Morning Blessed' })).toBeInTheDocument()
  })

  it('renders the left-aligned variant', () => {
    render(<SectionTitle overline="About us" title="Welcome" align="left" />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome' })).toBeInTheDocument()
  })
})
