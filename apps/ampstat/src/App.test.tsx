import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('song')).toBeInTheDocument()
    expect(screen.getByTestId('tours')).toBeInTheDocument()
    expect(screen.getByTestId('app-section')).toBeInTheDocument()
    expect(screen.getByTestId('featured-albums')).toBeInTheDocument()
    expect(screen.getByTestId('news')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
