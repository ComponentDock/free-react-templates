import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Reprise')).toBeInTheDocument()
    expect(screen.getByText(/Handpicked/)).toBeInTheDocument()
    expect(screen.getByText('SMARTPHONE')).toBeInTheDocument()
    expect(screen.getByText('free downloads only on fridays')).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
