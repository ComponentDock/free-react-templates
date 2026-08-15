import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  componentDockLabel,
  countdownTitle,
  galleryTitle,
  heroTagline,
  locationTitle,
  loveStoryTitle,
  programTitle,
  rsvpTitle,
} from './data'

describe('App', () => {
  it('composes every section in the source order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(new RegExp(heroTagline))
    expect(screen.getByRole('heading', { level: 2, name: countdownTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: loveStoryTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: galleryTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: programTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: rsvpTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: locationTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: componentDockLabel })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Knot — Wedding Template')
  })
})
