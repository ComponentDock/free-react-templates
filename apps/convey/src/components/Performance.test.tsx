import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Performance } from './Performance'

describe('Performance', () => {
  it('renders the section heading, both points and the image', () => {
    render(<Performance />)
    expect(screen.getByRole('heading', { name: 'Built to Perform' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Powerful Performance' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Light & Dark Color Schemes' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Aurora performance and themes' })).toBeInTheDocument()
  })
})
