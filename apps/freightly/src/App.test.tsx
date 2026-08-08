import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in landmarks and sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Freightly — Logistics Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /Ship Anywhere/ })).toBeInTheDocument()
    expect(screen.getByText('Complete Logistics Solutions')).toBeInTheDocument()
    expect(screen.getByText('Shipping Made Simple')).toBeInTheDocument()
    expect(screen.getByText('Calculate Your Shipping Cost')).toBeInTheDocument()
    expect(screen.getByText('Trusted by Industry Leaders')).toBeInTheDocument()
    expect(screen.getByText('Ready to Ship?')).toBeInTheDocument()
    expect(screen.getByText("Let's Discuss Your Shipping Needs")).toBeInTheDocument()
  })
})
