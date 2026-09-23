import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Liber — Author Book Landing Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /New Adventure/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Dr\. Travor James/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Some Features/i })).toBeInTheDocument()
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('PDF')).toBeInTheDocument()
    expect(screen.getByText('Breakthrough Thinking')).toBeInTheDocument()
    expect(screen.getByText(/Download Our App/i)).toBeInTheDocument()
    expect(screen.getByText(/What Our Readers Say/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })
})
