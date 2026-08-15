import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ctaButtonLabel, ctaTitle } from '../data'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline and the Find out more button', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { level: 2, name: ctaTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: ctaButtonLabel })).toBeInTheDocument()
  })
})
