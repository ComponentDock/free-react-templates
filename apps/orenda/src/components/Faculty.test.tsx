import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faculty } from './Faculty'

describe('Faculty', () => {
  it('renders the section title and four teacher cards with roles', () => {
    render(<Faculty />)
    expect(screen.getByRole('heading', { name: 'Our Best Teachers' })).toBeInTheDocument()
    for (const name of ['Alexa Janathon', 'Janathon Smith', 'Alexa MacCalum', 'Alexa J Watson']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Faculty')).toHaveLength(4)
  })

  it('renders the View All Faculty button', () => {
    render(<Faculty />)
    const button = screen.getByRole('link', { name: 'View All Faculty' })
    expect(button).toHaveAttribute('href', '#instructors')
  })

  it('renders teacher photos with descriptive alt text', () => {
    render(<Faculty />)
    expect(screen.getByRole('img', { name: 'Portrait of Alexa Janathon' })).toBeInTheDocument()
  })
})
