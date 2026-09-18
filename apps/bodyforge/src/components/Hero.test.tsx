import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the headline text and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('Feel Good')).toBeInTheDocument()
    expect(screen.getByText('Breath')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become A Member' })).toBeInTheDocument()
  })

  it('links the CTA to the contact section', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'Become A Member' })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
