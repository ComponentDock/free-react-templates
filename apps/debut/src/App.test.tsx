import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the coming-soon page and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Debut — Coming Soon')
    expect(screen.getByText(/follow us for update now!/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
