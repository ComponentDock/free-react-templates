import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SkillsSection } from './SkillsSection'

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    render(<SkillsSection />)
    expect(screen.getByText('Professional and creative mind')).toBeInTheDocument()
  })

  it('renders three progress bars with correct labels and percentages', () => {
    render(<SkillsSection />)
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('3D Design')).toBeInTheDocument()
    expect(screen.getByText('65%')).toBeInTheDocument()
    expect(screen.getByText('Interior')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
  })

  it('renders the About Us button', () => {
    render(<SkillsSection />)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the section image', () => {
    render(<SkillsSection />)
    expect(screen.getByAltText('Interior design workspace')).toBeInTheDocument()
  })
})
