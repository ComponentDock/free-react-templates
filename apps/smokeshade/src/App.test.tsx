import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all 11 sections in correct order', () => {
    render(<App />)
    expect(document.title).toBe('Smokeshade — Fashion Agency Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('Smokeshade').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Office Fashion')).toBeInTheDocument()
    expect(screen.getByText('New Fashion')).toBeInTheDocument()
    expect(screen.getByText('About Story')).toBeInTheDocument()
    expect(screen.getByText('Best Services Save The World')).toBeInTheDocument()
    expect(screen.getByText('Turn Your Dream Into Reality')).toBeInTheDocument()
    expect(screen.getByText('We have a lot of experience')).toBeInTheDocument()
    expect(screen.getByText('We Create Trends For The World')).toBeInTheDocument()
    expect(screen.getByText('Top Designers')).toBeInTheDocument()
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
