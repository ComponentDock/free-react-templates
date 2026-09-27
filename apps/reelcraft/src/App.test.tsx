import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all section landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Videographer's Portfolio/i })).toBeInTheDocument()
  })

  it('renders the services heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /What We do\?/i })).toBeInTheDocument()
  })

  it('renders the team heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /OUR Team/i })).toBeInTheDocument()
  })

  it('renders the blog heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Blog Update/i })).toBeInTheDocument()
  })

  it('renders the CTA heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Fresh Ideas/i })).toBeInTheDocument()
  })
})
