import { render, screen } from '@testing-library/react'
import { Video } from './Video'
import { it, expect } from 'vitest'

it('renders video section with play button', () => {
  render(<Video />)
  expect(screen.getByText('Discover')).toBeInTheDocument()
  expect(screen.getByText('Our Video')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
})

it('has parallax background', () => {
  render(<Video />)
  const section = screen.getByRole('button', { name: /play video/i }).closest('section')!
  expect(section).toBeInTheDocument()
})
