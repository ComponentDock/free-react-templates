import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Wedlock — Wedding & Event Planner')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /We believe that love is/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We make any idea and wish come true' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We arrange the perfect weddings' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Your memories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get ready with us' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Feedback from our happy couples' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wedding stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe for the updates!' })).toBeInTheDocument()
  })
})
