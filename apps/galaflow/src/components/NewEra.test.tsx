import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewEra } from './NewEra'

describe('NewEra', () => {
  it('renders the section title', () => {
    render(<NewEra />)
    expect(screen.getByText('The New Era of Tech Companies')).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<NewEra />)
    expect(screen.getByText(/Technology is reshaping/)).toBeInTheDocument()
    expect(screen.getByText(/Discover actionable strategies/)).toBeInTheDocument()
  })

  it('renders the Join Now button', () => {
    render(<NewEra />)
    expect(screen.getByText('Join Now')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<NewEra />)
    expect(screen.getByAltText('Tech companies')).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<NewEra />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
