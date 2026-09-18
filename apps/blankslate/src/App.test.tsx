import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BlankSlate — Business Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /We Help to Build You the Product/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Can Do for You/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interesting Facts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /My satisfied customer says/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Case Study/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Best Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Partners/i })).toBeInTheDocument()
  })
})
