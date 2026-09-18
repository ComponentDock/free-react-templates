import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in correct order', () => {
    render(<App />)

    expect(screen.getByText('Silverleaf')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Expert Care for the Elderly',
    )
    expect(screen.getByText('Independent Living')).toBeInTheDocument()
    expect(screen.getAllByText('Special Care').length).toBe(4)
    expect(screen.getByText('5,890')).toBeInTheDocument()
    expect(screen.getByText('Senior Care Center is for Your Family')).toBeInTheDocument()
    expect(screen.getByText('Our Goal is to Make Your Life Better')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Join Our Community')).toBeInTheDocument()
    expect(screen.getByText('Senior & Elder Home Care Center')).toBeInTheDocument()
    expect(screen.getByText('The Importance of Social Activities for Seniors')).toBeInTheDocument()
    expect(screen.getByText(/More templates at Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Silverleaf — Senior Care Template')
  })
})
