import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('Alex Morgan').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Hi!/)).toBeDefined()
    expect(screen.getByText('Who Am I?')).toBeDefined()
    expect(screen.getByText('My Skills')).toBeDefined()
    expect(screen.getByText('Work Experience')).toBeDefined()
    expect(screen.getByText('Recent Work')).toBeDefined()
    expect(screen.getByText('From the Blog')).toBeDefined()
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })
})
