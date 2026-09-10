import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByText('CoinWave')).toBeInTheDocument()
    expect(screen.getByText('$12,356')).toBeInTheDocument()
    expect(screen.getByText('The Currency Converter')).toBeInTheDocument()
    expect(screen.getByText('Get Paid through Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Exchange Bitcoin is not that tough Anymore')).toBeInTheDocument()
    expect(screen.getByText('Why choose us during purchase bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Ups and Downs of Bitcoin (Realtime)')).toBeInTheDocument()
    expect(screen.getByText('Huge Transaction in last Week')).toBeInTheDocument()
    expect(screen.getByText('Purchase whatever you want')).toBeInTheDocument()
    expect(screen.getByText('Latest Posts from our Blog')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('CoinWave — Cryptocurrency Landing')
  })
})
