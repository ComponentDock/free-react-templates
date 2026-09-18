import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ember — Restaurant Landing Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Deliciousness jumping into the mouth/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Exclusive Items/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Where The Food/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Expect The Best/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Delicious Food Menu/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Experience Chefs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Book A Table/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Customers Feedback/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
  })
})
