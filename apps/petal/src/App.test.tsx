import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Petal').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Making beautiful flowers/)).toBeInTheDocument()
    expect(screen.getByText('100% Freshness')).toBeInTheDocument()
    expect(screen.getByText('Fresh Flower')).toBeInTheDocument()
    expect(screen.getByText(/We provide all kinds/)).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText(/Let our flowers make your party/)).toBeInTheDocument()
    expect(screen.getByText('Florist tricks')).toBeInTheDocument()
    expect(screen.getByText('Alejandro Houston')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Petal — Fresh Flower & Gift Shop')
  })
})
