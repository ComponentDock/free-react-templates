import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Catalogly')).toBeInTheDocument()
    expect(screen.getByText('Georgia Helmet Collections!')).toBeInTheDocument()
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Catalogly — E-commerce Shop')
  })
})
