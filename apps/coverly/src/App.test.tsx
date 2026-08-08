import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the expected landmarks and sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Coverly — Insurance Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Protection You Can Count On/,
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'Insurance for Every Need' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The Smart Choice for Coverage' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Getting Covered is Easy' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See How Much You Could Save' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Common Questions' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request Your Free Quote' }),
    ).toBeInTheDocument()
  })
})
