import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Latest Works')).toBeInTheDocument()
    expect(screen.getByText('About Myself')).toBeInTheDocument()
    expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Follow Me')).toBeInTheDocument()
  })
})
