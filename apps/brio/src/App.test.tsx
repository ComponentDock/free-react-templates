import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Bright App Landing')).toBeInTheDocument()
    expect(screen.getByText('Brio')).toBeInTheDocument()
    expect(screen.getAllByText('Becoming A DVD Repair Expert Online')).toHaveLength(2)
    expect(screen.getByText('Reasons To Choose Notebook')).toBeInTheDocument()
    expect(screen.getByText('Download Free Song For iPod')).toBeInTheDocument()
    expect(screen.getByText('Powerful Performance')).toBeInTheDocument()
    expect(screen.getByText('Life Advice Looking Through')).toBeInTheDocument()
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Top Products')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Brio — Bright App Landing Page')
  })
})
