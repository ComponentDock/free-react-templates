import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PhotographySkills } from './PhotographySkills'

describe('PhotographySkills', () => {
  it('renders the section title', () => {
    render(<PhotographySkills />)
    expect(screen.getByText('World class photography skills')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<PhotographySkills />)
    expect(screen.getByText(/create a website for the first time/)).toBeInTheDocument()
  })
})
