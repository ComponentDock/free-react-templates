import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeatureCarousel } from './FeatureCarousel'

describe('FeatureCarousel', () => {
  it('shows the subheading, heading, and the first page of feature cards', () => {
    render(<FeatureCarousel />)
    expect(screen.getByText('Stay Healthy')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Setup Your Body With Workout' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Strength Training' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cardio Zones' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Heart Health' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Nutrition Coaching' })).not.toBeInTheDocument()
  })

  it('pages forward, wraps around, and pages backward', async () => {
    const user = userEvent.setup()
    render(<FeatureCarousel />)

    await user.click(screen.getByRole('button', { name: 'Next features' }))
    expect(screen.getByRole('heading', { name: 'Nutrition Coaching' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fat Burn Classes' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Strength Training' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next features' }))
    expect(screen.getByRole('heading', { name: 'Strength Training' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous features' }))
    expect(screen.getByRole('heading', { name: 'Nutrition Coaching' })).toBeInTheDocument()
  })
})
