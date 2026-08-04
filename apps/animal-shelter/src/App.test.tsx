import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Animal Shelter — Pet Adoption Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe(
      'Adopt Us. We need your help.',
    )
    expect(within(main).getByText('Process to adopt a pet')).toBeInTheDocument()
    expect(within(main).getByText('Testimonials from our guardians')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
