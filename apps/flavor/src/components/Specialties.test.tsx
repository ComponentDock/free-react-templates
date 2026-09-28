import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Specialties } from './Specialties'
import { specialties, specialties2 } from '../data'

describe('Specialties', () => {
  it('renders the heading and all dish cards', () => {
    render(<Specialties heading="Our Delicious Specialties" dishes={specialties} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Our Delicious Specialties')
    for (const dish of specialties) {
      expect(screen.getByRole('heading', { name: dish.title })).toBeInTheDocument()
      expect(screen.getByAltText(dish.title)).toBeInTheDocument()
    }
  })

  it('renders a different set of dishes when passed', () => {
    render(<Specialties heading="Flavor Specialties" dishes={specialties2} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Flavor Specialties')
    for (const dish of specialties2) {
      expect(screen.getByRole('heading', { name: dish.title })).toBeInTheDocument()
    }
  })

  it('renders the correct number of dish cards', () => {
    render(<Specialties heading="Test" dishes={specialties} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(specialties.length)
  })
})
