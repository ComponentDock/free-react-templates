import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StyleSection } from './StyleSection'

describe('StyleSection', () => {
  it('renders the video image, play button, heading, and lead', () => {
    render(<StyleSection />)
    expect(screen.getByRole('img', { name: /styled haircut/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Good Looking Style' })).toBeInTheDocument()
    expect(screen.getByText('Start with us today')).toBeInTheDocument()
    expect(screen.getAllByText(/cut starts|scissor work/i)).toHaveLength(2)
  })
})
