import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('What I do')).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<Services />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards.length).toBe(4)
  })

  it('renders service titles', () => {
    render(<Services />)
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Mobile Design')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/research-driven interfaces/i)).toBeInTheDocument()
  })
})
