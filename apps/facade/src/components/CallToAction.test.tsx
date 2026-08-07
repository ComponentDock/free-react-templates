import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading, play button, and duration', () => {
    render(<CallToAction />)

    expect(screen.getByRole('heading', { level: 2, name: 'View Our Project' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /play/i })).toBeInTheDocument()
    expect(screen.getByText('05:35')).toBeInTheDocument()
  })
})
