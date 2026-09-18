import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Methods } from './Methods'

describe('Methods', () => {
  it('renders section heading', () => {
    render(<Methods />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Methods')
  })

  it('renders How We Work heading', () => {
    render(<Methods />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('How We Work')
  })

  it('renders play button for video', () => {
    render(<Methods />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders methodology description', () => {
    render(<Methods />)
    expect(screen.getByText(/methodology combines/)).toBeInTheDocument()
  })
})
