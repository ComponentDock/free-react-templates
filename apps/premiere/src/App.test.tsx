import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the coming-soon screen and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Premiere — Coming Soon')
    expect(screen.getByText(/under construction/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
