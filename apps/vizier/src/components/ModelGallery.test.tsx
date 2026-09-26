import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ModelGallery } from './ModelGallery'

describe('ModelGallery', () => {
  it('renders all models by default', () => {
    render(<ModelGallery />)
    expect(screen.getByTestId('model-gallery')).toBeInTheDocument()
    const cards = screen.getAllByTestId('model-card')
    expect(cards).toHaveLength(8)
  })

  it('filters by Model tab', () => {
    render(<ModelGallery />)
    fireEvent.click(screen.getByRole('tab', { name: 'Model' }))
    const cards = screen.getAllByTestId('model-card')
    expect(cards).toHaveLength(2)
  })

  it('filters by Actor tab', () => {
    render(<ModelGallery />)
    fireEvent.click(screen.getByRole('tab', { name: 'Actor' }))
    const cards = screen.getAllByTestId('model-card')
    expect(cards).toHaveLength(4)
  })

  it('filters by Singer tab', () => {
    render(<ModelGallery />)
    fireEvent.click(screen.getByRole('tab', { name: 'Singer' }))
    const cards = screen.getAllByTestId('model-card')
    expect(cards).toHaveLength(2)
  })

  it('returns to All tab showing all models', () => {
    render(<ModelGallery />)
    fireEvent.click(screen.getByRole('tab', { name: 'Actor' }))
    fireEvent.click(screen.getByRole('tab', { name: 'All' }))
    const cards = screen.getAllByTestId('model-card')
    expect(cards).toHaveLength(8)
  })

  it('shows model names', () => {
    render(<ModelGallery />)
    expect(screen.getByText('Willie Figueroa')).toBeInTheDocument()
    expect(screen.getByText('Della Martinez')).toBeInTheDocument()
  })
})
