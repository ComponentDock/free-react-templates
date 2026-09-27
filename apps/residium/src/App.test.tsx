import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Residium')).toBeInTheDocument()
    expect(screen.getByText(/We Create your dream apartment/)).toBeInTheDocument()
    expect(screen.getByText(/We are Residium/)).toBeInTheDocument()
    expect(screen.getByText(/Our Facilities/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Certificates/ })).toBeInTheDocument()
    expect(screen.getByText(/Featured Apartments/)).toBeInTheDocument()
    expect(screen.getByText(/What Our Clients Say/)).toBeInTheDocument()
    expect(screen.getByText(/Get a free/)).toBeInTheDocument()
    expect(screen.getByText(/Our Latest News/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
