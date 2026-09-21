import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestPreview } from './LatestPreview'

describe('LatestPreview', () => {
  it('renders the section title', () => {
    render(<LatestPreview />)
    expect(screen.getByText(/Latest Preview/)).toBeInTheDocument()
  })

  it('renders review cards with scores', () => {
    render(<LatestPreview />)
    expect(screen.getByText('Monster Hunter World')).toBeInTheDocument()
    expect(screen.getByText('Red Dead Redemption 2')).toBeInTheDocument()
    expect(screen.getByText('Forza Horizon 4')).toBeInTheDocument()
    expect(screen.getByText('Battlefield V')).toBeInTheDocument()
    expect(screen.getByText("Assassin's Creed Odyssey")).toBeInTheDocument()
    expect(screen.getByText('87')).toBeInTheDocument()
    expect(screen.getByText('92')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<LatestPreview />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'latest')
  })
})
