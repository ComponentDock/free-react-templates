import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    const logos = screen.getAllByText('BroadSheet')
    expect(logos.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Home')).toBeInTheDocument()
    const breakingNews = screen.getAllByText('Breaking News')
    expect(breakingNews.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Popular News')).toBeInTheDocument()
    expect(screen.getByText("Editor's Pick")).toBeInTheDocument()
    expect(screen.getByText('World News')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BroadSheet — News & Magazine Template')
  })
})
