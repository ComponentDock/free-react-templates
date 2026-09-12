import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Small Business Insurance Agency')).toBeInTheDocument()
    expect(screen.getByText('An Insurance Company')).toBeInTheDocument()
  })

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn)
    expect(screen.getByText('Insurance Coverage To Meet Your Needs')).toBeInTheDocument()
    expect(screen.getByText('You Will Love Our Services')).toBeInTheDocument()
  })

  it('navigates to previous slide from non-first slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn) // now on slide 1
    const prevBtn = screen.getByLabelText('Previous slide')
    await user.click(prevBtn) // c !== 0, so c - 1
    expect(screen.getByText('Small Business Insurance Agency')).toBeInTheDocument()
  })

  it('navigates to previous slide from first slide (wraps)', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const prevBtn = screen.getByLabelText('Previous slide')
    await user.click(prevBtn) // c === 0, wraps to last
    expect(screen.getByText('Insurance Coverage To Meet Your Needs')).toBeInTheDocument()
  })

  it('wraps next to first slide from last', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn) // slide 1
    await user.click(nextBtn) // wraps to slide 0
    expect(screen.getByText('Small Business Insurance Agency')).toBeInTheDocument()
  })

  it('navigates to slide via dot click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot = screen.getByLabelText('Go to slide 2')
    await user.click(dot)
    expect(screen.getByText('Insurance Coverage To Meet Your Needs')).toBeInTheDocument()
  })

  it('renders slide navigation dots', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
  })
})
