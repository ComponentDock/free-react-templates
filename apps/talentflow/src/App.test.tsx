import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Talentflow')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Your Partners/i })).toBeInTheDocument()
    expect(screen.getByText('Corporate Collaboration')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Agency' })).toBeInTheDocument()
    expect(screen.getByText('99,399')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Leadership' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Talentflow — HR Consulting Template')
  })
})
