import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('MicDrop').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Stories That')).toBeInTheDocument()
    expect(screen.getByLabelText('Podcast statistics')).toBeInTheDocument()
    expect(screen.getByLabelText('Showcase statistics')).toBeInTheDocument()
    expect(screen.getByLabelText('Recent episodes')).toBeInTheDocument()
    expect(screen.getByLabelText('Featured guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter signup')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
