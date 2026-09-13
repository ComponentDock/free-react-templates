import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    expect(screen.getByText('Pyxis')).toBeInTheDocument()
    expect(screen.getByText(/effective sleek and clean design/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /meet our team/i })).toBeInTheDocument()
    expect(screen.getByText('Responsive Layout')).toBeInTheDocument()
    expect(screen.getByText(/being unique is the preference/i)).toBeInTheDocument()
    expect(screen.getByText('5962+')).toBeInTheDocument()
    expect(screen.getByText('Responsive Framework')).toBeInTheDocument()
    expect(screen.getByText('Visit Our Office')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
