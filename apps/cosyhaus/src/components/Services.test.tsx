import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards with titles', () => {
    render(<Services />)
    expect(screen.getByText('Lighting')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Office Decoration')).toBeInTheDocument()
  })

  it('shows the section heading', () => {
    render(<Services />)
    expect(screen.getByText(/Best Interior Services/)).toBeInTheDocument()
  })
})
