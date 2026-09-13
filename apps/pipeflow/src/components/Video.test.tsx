import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Video } from './Video'

describe('Video', () => {
  it('renders the heading', () => {
    render(<Video />)
    expect(screen.getByText('Explore ourselves in a new way')).toBeInTheDocument()
  })

  it('renders the Watch Video link', () => {
    render(<Video />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })
})
