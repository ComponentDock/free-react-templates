import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tressly — Hair Salon Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Tressly' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome to Hair Salon' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Tressly' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Experience Our Outstanding Services' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
  })
})
