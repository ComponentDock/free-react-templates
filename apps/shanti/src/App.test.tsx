import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shanti — Yoga & Wellness')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Inspiration For Joyful Living/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why You Should Go To Yoga' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Choose Your Level & Focus' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Membership Cards' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Successful Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'See the latest photos' })).toBeInTheDocument()
  })
})
