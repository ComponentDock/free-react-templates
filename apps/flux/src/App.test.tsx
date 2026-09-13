import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Digital Agency')).toBeInTheDocument()
    expect(screen.getByText('Stay in touch with us')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
  })
})
