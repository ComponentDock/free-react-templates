import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Pediment').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Quality is not only our standard.')).toBeInTheDocument()
    expect(screen.getByText('We propose and discuss design rules')).toBeInTheDocument()
    expect(screen.getByText('Latest projects')).toBeInTheDocument()
    expect(screen.getByText('What we do')).toBeInTheDocument()
    expect(screen.getByText('What your clients say')).toBeInTheDocument()
    expect(screen.getByText('Meet our team')).toBeInTheDocument()
    expect(screen.getByText('From our blog')).toBeInTheDocument()
    expect(screen.getByText('Ready To Work With Us?')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pediment — Interior Design & Architecture Template')
  })
})
