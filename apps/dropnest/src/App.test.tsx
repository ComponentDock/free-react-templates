import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText('Dropdown #19')).toBeInTheDocument()
  })

  it('renders the courses dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /courses/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Dropnest')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dropnest — Courses Dropdown')
  })
})
