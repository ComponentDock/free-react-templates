import { render, screen, act, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { HeroSlider, type Slide } from './HeroSlider'

const slides: Slide[] = [
  {
    tag: 'Style',
    heading: 'Strategic Design',
    description: 'A description',
    image: 'https://picsum.photos/seed/test1/800/400',
  },
  {
    tag: 'Sports',
    heading: 'Brand Creators',
    description: 'Another description',
    image: 'https://picsum.photos/seed/test2/800/400',
  },
]

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide by default', () => {
    render(<HeroSlider slides={slides} />)
    expect(screen.getByText('Style')).toBeInTheDocument()
    expect(screen.getByText('Strategic Design')).toBeInTheDocument()
    expect(screen.getByText('A description')).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<HeroSlider slides={slides} />)
    const buttons = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(buttons).toHaveLength(2)
  })

  it('advances to the next slide after interval', async () => {
    render(<HeroSlider slides={slides} />)
    expect(screen.getByText('Strategic Design')).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Brand Creators')).toBeInTheDocument()
    expect(screen.queryByText('Strategic Design')).not.toBeInTheDocument()
  })

  it('navigates to a specific slide when indicator is clicked', async () => {
    render(<HeroSlider slides={slides} />)

    const slide2Button = screen.getByRole('button', { name: 'Go to slide 2' })
    await act(async () => {
      fireEvent.click(slide2Button)
    })

    expect(screen.getByText('Brand Creators')).toBeInTheDocument()
  })

  it('wraps around after the last slide', async () => {
    render(<HeroSlider slides={slides} />)

    await act(async () => {
      vi.advanceTimersByTime(5000)
    })
    await act(async () => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Strategic Design')).toBeInTheDocument()
  })

  it('renders a section element with background image', () => {
    const { container } = render(<HeroSlider slides={slides} />)
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
    expect(section).toHaveStyle({ backgroundImage: `url(${slides[0]!.image})` })
  })

  it('has the correct number of slide indicators matching slides', () => {
    const threeSlides: Slide[] = [
      ...slides,
      {
        tag: 'Fashion',
        heading: 'Third',
        description: 'Third desc',
        image: 'https://picsum.photos/seed/test3/800/400',
      },
    ]
    render(<HeroSlider slides={threeSlides} />)
    const buttons = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(buttons).toHaveLength(3)
  })
})
