import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Articles } from './Articles'

describe('Articles', () => {
  it('renders the section title', () => {
    render(<Articles />)
    expect(
      screen.getByRole('heading', { level: 2, name: /tips and articles/i }),
    ).toBeInTheDocument()
  })

  it('renders three article cards with meta and date badges', () => {
    render(<Articles />)
    expect(
      screen.getByRole('heading', { name: 'How to choose the right rental car' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Five tips for your first long road trip' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Understanding full insurance coverage' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('By :: Admin')).toHaveLength(3)
    expect(screen.getByText('Comments :: 10')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Jan')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })
})
