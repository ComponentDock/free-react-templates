import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Podwave')).toBeInTheDocument()
    expect(screen.getByText('Recent Podcasts')).toBeInTheDocument()
    expect(screen.getByText('Behind The Mic')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })
})
