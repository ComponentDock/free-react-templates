import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vitala — Medical & Healthcare Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Caring for Your Health/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Emergency Services/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Welcome to Vitala Medical Center/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Popular Departments/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /30K/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet Our Doctors/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Recent Blogs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Make an Appointment/i })).toBeInTheDocument()
  })
})
