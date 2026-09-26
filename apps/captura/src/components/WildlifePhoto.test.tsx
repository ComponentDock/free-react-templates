import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WildlifePhoto } from './WildlifePhoto'

describe('WildlifePhoto', () => {
  it('renders the section title', () => {
    render(<WildlifePhoto />)
    expect(screen.getByText('Wildlife photography')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<WildlifePhoto />)
    expect(screen.getByText(/create a website for the first time/)).toBeInTheDocument()
  })

  it('renders the Explore Work button', () => {
    render(<WildlifePhoto />)
    expect(screen.getByText('Explore Work')).toBeInTheDocument()
  })

  it('renders the wildlife image', () => {
    render(<WildlifePhoto />)
    expect(screen.getByAltText('Wildlife photography')).toBeInTheDocument()
  })
})
