import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    expect(screen.getAllByText('Batter').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/instead of eating/i)).toBeInTheDocument()
    expect(screen.getByText('Stunning Visuals')).toBeInTheDocument()
    expect(screen.getByText('Our Untold Story')).toBeInTheDocument()
    expect(screen.getByText('Our Amazing Works')).toBeInTheDocument()
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })
})
