import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the duplicated What We Do subheading and heading', () => {
    render(<WhatWeDo />)

    const headings = screen.getAllByText('What We Do')
    expect(headings.length).toBe(2)
    expect(screen.getByRole('heading', { level: 2, name: 'What We Do' })).toBeInTheDocument()
  })

  it('renders five program cards with circular photos, badges, and Learn More links', () => {
    render(<WhatWeDo />)

    const titles = [
      'Weight Loss Program',
      'Sports Nutritionists',
      'Personalized Nutrition',
      'Individual Coaching',
      'Child Nutrition',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    const photos = document.querySelectorAll('article img')
    expect(photos.length).toBe(5)
    for (const photo of photos) {
      expect(photo.className).toContain('rounded-full')
      expect(photo.className).toContain('border-[7px]')
    }

    expect(screen.getAllByRole('link', { name: 'Learn More' }).length).toBe(5)
    // Numbered badges 1..5
    for (const n of ['1', '2', '3', '4', '5']) {
      expect(screen.getByText(n)).toBeInTheDocument()
    }
  })
})
