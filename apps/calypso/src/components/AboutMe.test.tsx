import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutMe } from './AboutMe'

describe('AboutMe', () => {
  it('renders the section', () => {
    render(<AboutMe />)
    expect(screen.getByTestId('about-me')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<AboutMe />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Passionate About Creating Digital Experiences')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<AboutMe />)
    expect(screen.getByText(/product designer with over 8 years/)).toBeInTheDocument()
    expect(screen.getByText(/not designing, you can find me/)).toBeInTheDocument()
  })

  it('renders all three skill bars', () => {
    render(<AboutMe />)
    expect(screen.getByText('UI Design')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('UX Research')).toBeInTheDocument()
    expect(screen.getByText('89%')).toBeInTheDocument()
    expect(screen.getByText('Illustration')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })
})
