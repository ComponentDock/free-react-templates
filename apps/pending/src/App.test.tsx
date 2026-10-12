import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page and titles the document', () => {
    render(<App />)

    expect(document.title).toBe('Pending — Not Long')
    expect(screen.getByTestId('heading')).toHaveTextContent('Not Long')
    expect(screen.getByTestId('slideshow')).toBeInTheDocument()
    expect(screen.getByTestId('brand-mark')).toBeInTheDocument()
    expect(screen.getByTestId('countdown')).toBeInTheDocument()
    expect(screen.getByTestId('signup-pill')).toBeInTheDocument()
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
    expect(screen.getByTestId('social-row')).toBeInTheDocument()
    expect(screen.getByTestId('email-form')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
