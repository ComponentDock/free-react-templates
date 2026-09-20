import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Tadpole').length).toBeGreaterThan(0)
    expect(screen.getByText('Where Little Minds Grow Big Dreams')).toBeInTheDocument()
    expect(screen.getByText('Our Special Features')).toBeInTheDocument()
    expect(screen.getByText('A Place Where Every Child Matters')).toBeInTheDocument()
    expect(screen.getByText('Learning Programs')).toBeInTheDocument()
    expect(screen.getByText('Our Teachers')).toBeInTheDocument()
    expect(screen.getByText('Annual Winter Festival')).toBeInTheDocument()
    expect(screen.getByText('What Parents Say')).toBeInTheDocument()
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tadpole — Kindergarten & Preschool Template')
  })
})
