import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getAllByText('Sonority').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Open the world of music/)).toBeInTheDocument()
    expect(screen.getByText(/Listen to a personalized/)).toBeInTheDocument()
    expect(screen.getByText(/Get ready for seamless/)).toBeInTheDocument()
    expect(screen.getByText(/Listen free or subscribe/)).toBeInTheDocument()
    expect(screen.getByText(/Customers are loving Sonority/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sonority — Music Streaming Landing')
  })
})
