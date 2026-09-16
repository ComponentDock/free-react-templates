import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the contact form and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Inquire — Contact Form Template')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Inquire')
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
