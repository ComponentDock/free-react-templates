import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByText('Lodgely')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A Best Place To Stay')
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
    expect(screen.getByText('Welcome!')).toBeInTheDocument()
    expect(screen.getByText('Rooms & Suites')).toBeInTheDocument()
    expect(screen.getByText('Photos')).toBeInTheDocument()
    expect(screen.getByText('Our Restaurant Menu')).toBeInTheDocument()
    expect(screen.getByText('People Says')).toBeInTheDocument()
    expect(screen.getAllByText('Events').length).toBeGreaterThan(0)
    expect(screen.getByText(/Reserve Now!/)).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Lodgely — Luxury Hotel Template')
  })
})
