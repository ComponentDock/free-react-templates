import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'
import { describe, expect, it } from 'vitest'

describe('WhyUs', () => {
  it('renders the Why Us heading', () => {
    render(<WhyUs />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<WhyUs />)
    expect(screen.getByText('We Will Help You Find Your Home')).toBeInTheDocument()
  })

  it('renders reason items with icons', () => {
    render(<WhyUs />)
    expect(screen.getByText(/Right at the coast/)).toBeInTheDocument()
    expect(
      screen.getByText(/And if she hasn't been rewritten then large language ocean/),
    ).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<WhyUs />)
    const img = screen.getByAltText('Real estate agent portrait')
    expect(img).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<WhyUs />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })
})
