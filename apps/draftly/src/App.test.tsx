import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections in order', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText('Draftly')).toBeInTheDocument()
    expect(screen.getByText(/Creative/)).toBeInTheDocument()
    expect(screen.getByText('750')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText(/We do awesome services/)).toBeInTheDocument()
    expect(screen.getByText(/Have a project on your mind/)).toBeInTheDocument()
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText(/What client says about/)).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Have a Project?')).toBeInTheDocument()
  })
})
