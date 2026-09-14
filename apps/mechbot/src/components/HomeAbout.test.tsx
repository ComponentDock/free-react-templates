import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeAbout } from './HomeAbout'

describe('HomeAbout', () => {
  it('renders the heading and description', () => {
    render(<HomeAbout />)
    expect(
      screen.getByRole('heading', { name: /Pioneering Accessible Robotics/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Mechbot was founded to make robotics accessible/i)).toBeInTheDocument()
  })

  it('renders all highlight bullet points', () => {
    render(<HomeAbout />)
    expect(screen.getByText('Industry-leading robotic kits since 2018')).toBeInTheDocument()
    expect(screen.getByText('Over 10,000 units shipped worldwide')).toBeInTheDocument()
    expect(screen.getByText('Award-winning STEM education platform')).toBeInTheDocument()
    expect(screen.getByText('Open-source firmware and SDK')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<HomeAbout />)
    expect(screen.getByRole('img', { name: /Mechbot team/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
