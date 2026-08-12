import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Decibel — DJ & Radio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Turn On The Feeling With Music/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Shows' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Podcasts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Love By Our Listeners' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our DJs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'News & Events' })).toBeInTheDocument()
  })
})
