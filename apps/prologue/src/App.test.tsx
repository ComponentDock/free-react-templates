import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page and titles the document', () => {
    render(<App />)

    expect(document.title).toBe('Prologue — Nearly There')
    expect(screen.getByTestId('heading')).toHaveTextContent('Nearly There')
    expect(screen.getByTestId('content-panel')).toBeInTheDocument()
    expect(screen.getByTestId('photo-panel')).toBeInTheDocument()
    expect(screen.getByTestId('subscribe-bar')).toBeInTheDocument()
    expect(screen.getByTestId('social-band')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
