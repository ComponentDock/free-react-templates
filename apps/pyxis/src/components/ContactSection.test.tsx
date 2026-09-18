import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders all 4 contact columns with titles', () => {
    render(<ContactSection />)
    expect(screen.getByText('Visit Our Office')).toBeInTheDocument()
    expect(screen.getByText("Let's Call Us")).toBeInTheDocument()
    expect(screen.getByText("Let's Email Us")).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<ContactSection />)
    expect(screen.getByText(/123 business avenue/i)).toBeInTheDocument()
    expect(screen.getByText(/\(415\) 555-0123/)).toBeInTheDocument()
    expect(screen.getByText('hello@pyxis.dev')).toBeInTheDocument()
    expect(screen.getByText('support@pyxis.dev')).toBeInTheDocument()
  })
})
