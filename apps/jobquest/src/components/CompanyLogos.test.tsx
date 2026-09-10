import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CompanyLogos } from './CompanyLogos'

describe('CompanyLogos', () => {
  it('renders the section heading', () => {
    render(<CompanyLogos />)
    expect(screen.getByText('Our Candidates Work In Company')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CompanyLogos />)
    expect(screen.getByText(/connect top talent/)).toBeInTheDocument()
  })

  it('renders 4 company logo placeholders', () => {
    render(<CompanyLogos />)
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(4)
  })
})
