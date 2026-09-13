import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the featured article', () => {
    render(<MainContent />)
    expect(screen.getByText(/Breaking: Major Climate Summit/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders side articles', () => {
    render(<MainContent />)
    expect(screen.getByText(/Stock Markets Rally/)).toBeInTheDocument()
    expect(screen.getByText(/Mediterranean Diet/)).toBeInTheDocument()
    expect(screen.getByText(/City Council Approves/)).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<MainContent />)
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Finance')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Local')).toBeInTheDocument()
  })
})
