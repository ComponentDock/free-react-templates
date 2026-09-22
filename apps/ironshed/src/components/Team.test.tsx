import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section title and View All button', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Trainer' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()
  })

  it('displays 3 trainer cards with names, specialties, and descriptions', () => {
    render(<Team />)

    expect(screen.getByText('Robert Fox')).toBeInTheDocument()
    expect(screen.getByText('Jane Cooper')).toBeInTheDocument()
    expect(screen.getByText('Albert Flores')).toBeInTheDocument()

    expect(screen.getByText('Body Building')).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Cardio')).toBeInTheDocument()

    expect(screen.getByText(/Certified personal trainer/)).toBeInTheDocument()
  })

  it('renders social icons for each trainer', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(facebookLinks).toHaveLength(3)

    const twitterLinks = screen.getAllByRole('link', { name: 'Twitter' })
    expect(twitterLinks).toHaveLength(3)

    const instagramLinks = screen.getAllByRole('link', { name: 'Instagram' })
    expect(instagramLinks).toHaveLength(3)

    const linkedinLinks = screen.getAllByRole('link', { name: 'LinkedIn' })
    expect(linkedinLinks).toHaveLength(3)
  })

  it('renders trainer images with picsum URLs', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    const trainerImages = images.filter((img) =>
      img.getAttribute('src')?.includes('ironshed-trainer'),
    )
    expect(trainerImages).toHaveLength(3)
  })
})
