import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Civicore — Job Board Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /find your dream job/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /find job by category/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /browse recent jobs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /get job information daily/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /happy employees/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /download our app/i })).toBeInTheDocument()
  })
})
