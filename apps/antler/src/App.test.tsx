import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Antler — Blog Template')
  })

  it('composes the page in the reference section order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const regions = screen.getAllByRole('region')
    const regionNames = regions.map((region) => {
      const label = region.getAttribute('aria-label')
      if (label) return label
      return region.querySelector('h2')?.textContent ?? ''
    })
    expect(regionNames).toEqual(['Intro', 'Articles', 'Subscribe to our Newsletter'])
  })
})
