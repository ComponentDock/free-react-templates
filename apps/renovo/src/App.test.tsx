import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Renovo')).toBeInTheDocument()
    expect(screen.getByText('All things need to repair')).toBeInTheDocument()
    expect(screen.getByText('What we Offer to our Supporters')).toBeInTheDocument()
    expect(screen.getByText(/We can fix all types/)).toBeInTheDocument()
    expect(screen.getByText('Enjoy 25% Seasonal Discount!')).toBeInTheDocument()
    expect(screen.getByText('Our Working Process')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Feedback from our real clients')).toBeInTheDocument()
    expect(screen.getByText('Latest posts from our blog')).toBeInTheDocument()
    expect(screen.getByText('About Renovo')).toBeInTheDocument()
  })
})
