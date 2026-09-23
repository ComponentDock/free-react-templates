import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Reimagine — Creative Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /We grow money/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stunning Visuals/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Offered Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Amazing Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Untold Story/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Subscribe for our Newsletter/i }),
    ).toBeInTheDocument()
  })
})
