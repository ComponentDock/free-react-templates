import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Learnwise — Education & Courses')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText("Let's Study Together")).toBeInTheDocument()
    expect(screen.getByText('1912')).toBeInTheDocument()
    expect(screen.getByText('Popular Online Courses')).toBeInTheDocument()
    expect(screen.getByText('The Best Tutors in Town')).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
    expect(screen.getByText('Upcoming events')).toBeInTheDocument()
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })
})
