import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EducationCta } from './EducationCta'

describe('EducationCta', () => {
  it('renders the heading', () => {
    render(<EducationCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      "Education for Tomorrow's Leaders",
    )
  })

  it('renders the Learn More button', () => {
    render(<EducationCta />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
