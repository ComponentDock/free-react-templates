import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('offers-section')).toBeInTheDocument()
    expect(screen.getByTestId('video-section')).toBeInTheDocument()
    expect(screen.getByTestId('dining-section')).toBeInTheDocument()
    expect(screen.getByTestId('featured-rooms')).toBeInTheDocument()
    expect(screen.getByTestId('reservation-bar')).toBeInTheDocument()
    expect(screen.getByTestId('instagram-feed')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
