import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })

  it('has the correct page title', () => {
    render(<App />)
    expect(document.title).toBe('CureNova — Medical Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/CureNova/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Your Health is always in the first place/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive services for our patients/)).toBeInTheDocument()
    expect(screen.getByText('About CureNova')).toBeInTheDocument()
    expect(screen.getByText(/What makes us best/)).toBeInTheDocument()
    expect(screen.getByText(/Well Experienced Doctors/)).toBeInTheDocument()
    expect(screen.getByText(/Our patients and their opinions/)).toBeInTheDocument()
    expect(screen.getByText('Recent blog')).toBeInTheDocument()
  })
})
