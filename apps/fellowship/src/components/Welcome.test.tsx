import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders heading', () => {
    render(<Welcome />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome To Fellowship')
  })

  it('renders pastor name', () => {
    render(<Welcome />)
    expect(screen.getByText('Church Pastor Gregg Smith')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Welcome />)
    expect(screen.getByLabelText('Play welcome video')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Welcome />)
    expect(screen.getByLabelText('Welcome')).toBeInTheDocument()
  })
})
