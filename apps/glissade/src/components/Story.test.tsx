import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Story } from './Story'

describe('Story', () => {
  it('renders the heading and description', () => {
    render(<Story />)
    expect(screen.getByText(/From the part of beginning/i)).toBeInTheDocument()
    expect(screen.getByText(/Usage of the Internet/i)).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Story />)
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
