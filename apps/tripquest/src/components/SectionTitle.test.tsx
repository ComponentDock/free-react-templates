import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the centered heading with a grey supporting line', () => {
    render(<SectionTitle title="Popular Destinations" subtitle="Hand-picked places." />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Popular Destinations')
    expect(screen.getByText('Hand-picked places.')).toBeInTheDocument()
  })

  it('renders the heading alone when no subtitle is supplied', () => {
    render(<SectionTitle title="Bare heading" />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Bare heading')
    expect(screen.queryByRole('paragraph')).toBeNull()
  })
})
