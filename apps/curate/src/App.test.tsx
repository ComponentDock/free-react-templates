import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Curate')).toBeInTheDocument()
    expect(screen.getByText("Let's Explore Idea!")).toBeInTheDocument()
    expect(screen.getByText('Vector Artworks')).toBeInTheDocument()
    expect(screen.getByText('Fannie Rowe')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('sets page title', () => {
    render(<App />)
    expect(document.title).toBe('Curate — Portfolio Template')
  })
})
