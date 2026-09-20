import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('EncoreMix').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
    expect(screen.getByText('The Lineup Artists-Headliners')).toBeInTheDocument()
    expect(screen.getByText('The Complete Lineup')).toBeInTheDocument()
    expect(screen.getByText('Our Next Events')).toBeInTheDocument()
    expect(screen.getByText('Our Last News')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
