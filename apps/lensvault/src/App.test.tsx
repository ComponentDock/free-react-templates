import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('LensVault')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /lensvault photography/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /client/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /why choose us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /follow us on instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
