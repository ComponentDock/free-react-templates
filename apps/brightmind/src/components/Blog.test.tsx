import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog post cards with titles', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent from Blog/i })).toBeInTheDocument()
    expect(screen.getByText('How to Stand Out at Your First Job')).toBeInTheDocument()
    expect(screen.getByText('The Future of Online Learning')).toBeInTheDocument()
    expect(screen.getByText('Tips for Effective Study Habits')).toBeInTheDocument()
  })
})
