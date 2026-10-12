import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page and titles the document', () => {
    render(<App />)

    expect(document.title).toBe('Looming — Landing Soon')
    expect(screen.getByTestId('heading')).toHaveTextContent('On Its Way')
    expect(screen.getByTestId('content-panel')).toBeInTheDocument()
    expect(screen.getByTestId('photo-panel')).toBeInTheDocument()
    expect(screen.getByTestId('slideshow')).toBeInTheDocument()
    expect(screen.getByTestId('email-form')).toBeInTheDocument()
    expect(screen.getByTestId('social-row')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
