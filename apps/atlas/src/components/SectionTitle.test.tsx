import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the heading text', () => {
    render(<SectionTitle>Latest Articles</SectionTitle>)
    expect(screen.getByRole('heading', { level: 5, name: 'Latest Articles' })).toBeInTheDocument()
  })
})
