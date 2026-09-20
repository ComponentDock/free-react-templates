import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Classroom')).toBeInTheDocument()
    expect(screen.getByText('Learn From The Expert')).toBeInTheDocument()
    expect(screen.getAllByText('Courses').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Programs')).toBeInTheDocument()
    expect(screen.getByText('Our Teachers')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Message Us')).toBeInTheDocument()
  })
})
