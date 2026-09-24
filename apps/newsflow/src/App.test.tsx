import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Newsflow.')).toBeInTheDocument()
    expect(screen.getByText('Viral')).toBeInTheDocument()
    expect(screen.getByLabelText('Trending stories')).toBeInTheDocument()
    expect(screen.getByLabelText('Featured stories')).toBeInTheDocument()
    expect(screen.getByLabelText('More stories')).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter signup')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
