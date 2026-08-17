import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the photo with a bottom-right counter box', () => {
    render(<About />)

    const photo = screen.getByAltText('') as HTMLImageElement
    expect(photo).toBeInTheDocument()
    expect(photo.src).toContain('picsum.photos')

    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('Years of experienced')).toBeInTheDocument()
  })

  it('renders the heading column with copy and the two-column checklist', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Better Eat, Better Life' })).toBeInTheDocument()
    expect(
      screen.getByText('If You Get A Better Nutrition, You Can Enjoy A Healthy Age'),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Can Help You' })).toBeInTheDocument()

    const items = [
      'Low Energy',
      'Stress & Anxiety',
      'Poor Eating Habits',
      'Digestive Problems',
      'Balance Body & Mind',
      'Advice',
      'Workout Routines',
      'Protein',
    ]
    const list = screen.getByRole('list')
    for (const item of items) {
      expect(list).toHaveTextContent(item)
    }
    expect(list.querySelectorAll('li').length).toBe(8)
  })
})
