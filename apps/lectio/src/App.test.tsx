import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Lectio')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Literature Course/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Search your Course/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Training Centers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Courses/i })).toBeInTheDocument()
    expect(screen.getByText('2500')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stay Updated/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Engineering' })).toBeInTheDocument()
  })
})
