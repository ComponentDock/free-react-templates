import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the under-construction screen and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Incoming — Under Construction')
    expect(screen.getByText('Our website is under construction')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Notified' })).toBeInTheDocument()
  })
})
