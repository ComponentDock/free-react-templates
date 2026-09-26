import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading', () => {
    render(<Cta />)
    expect(screen.getByText("Let's discuss for a project")).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Cta />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders Start Talking button', () => {
    render(<Cta />)
    expect(screen.getByText('Start Talking')).toBeInTheDocument()
  })

  it('has the contact section id', () => {
    render(<Cta />)
    const section = document.getElementById('contact')
    expect(section).toBeInTheDocument()
  })

  it('Start Talking button links to contact', () => {
    render(<Cta />)
    const btn = screen.getByText('Start Talking')
    expect(btn).toHaveAttribute('href', '#contact')
  })
})
