import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ShopLane — E-Commerce Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /get up to 30% off/i, level: 1 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^New Arrivals$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /deal of the week/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /best sellers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /latest blogs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
  })
})
