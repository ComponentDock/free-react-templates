import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe("TinyBrights — Children's Education Template")
  })

  it('composes every section in the main landmark', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText(/Where Kids Learn/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to TinyBrights/i)).toBeInTheDocument()
    expect(screen.getByText(/Where Every Day is an Adventure/i)).toBeInTheDocument()
    expect(screen.getByText(/Meet Our Teachers/i)).toBeInTheDocument()
    expect(screen.getByText(/Popular Courses/i)).toBeInTheDocument()
    expect(screen.getByText(/Happy Students/i)).toBeInTheDocument()
    expect(screen.getByText(/What Parents Say/i)).toBeInTheDocument()
    expect(screen.getByText(/Book a Free Consultation/i)).toBeInTheDocument()
  })
})
