import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the title text', () => {
    render(<SectionTitle>Today's Highlight</SectionTitle>)
    expect(screen.getByText("Today's Highlight")).toBeInTheDocument()
  })

  it('centers the title when asked to', () => {
    const { container } = render(<SectionTitle align="center">Lifestyle</SectionTitle>)
    expect(container.querySelector('.text-center')).toBeInTheDocument()
  })
})
