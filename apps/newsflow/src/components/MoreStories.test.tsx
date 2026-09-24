import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MoreStories } from './MoreStories'

describe('MoreStories', () => {
  it('renders story cards', () => {
    render(<MoreStories />)
    expect(screen.getByText(/startup changed the way/)).toBeInTheDocument()
    expect(screen.getByText(/hidden gems of Southeast Asia/)).toBeInTheDocument()
    expect(screen.getByText(/Fitness trends/)).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<MoreStories />)
    expect(screen.getByText('Tech')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
  })

  it('renders timestamps', () => {
    render(<MoreStories />)
    expect(screen.getAllByText(/days ago/).length).toBe(3)
  })
})
