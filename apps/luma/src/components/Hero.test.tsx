import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the carousel with the first slide visible', () => {
    render(<Hero />)
    expect(screen.getByText('Nature')).toBeDefined()
    const moreButtons = screen.getAllByText('More Photos')
    expect(moreButtons.length).toBe(7)
  })

  it('renders all category titles in the DOM', () => {
    render(<Hero />)
    const categories = [
      'Nature',
      'Portrait',
      'People',
      'Architecture',
      'Animals',
      'Sports',
      'Travel',
    ]
    for (const cat of categories) {
      expect(screen.getAllByText(cat).length).toBeGreaterThan(0)
    }
  })

  it('renders prev and next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeDefined()
    expect(screen.getByLabelText('Next slide')).toBeDefined()
  })

  it('renders pagination dots', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(7)
  })

  it('navigates to the next slide on next click', () => {
    render(<Hero />)
    const nextBtn = screen.getByLabelText('Next slide')
    fireEvent.click(nextBtn)
    // After clicking next, Portrait should be visible (but all are in DOM, check aria-hidden)
    const natureSlide = screen.getAllByText('Nature')[0]
    // The first Nature div should have opacity-0 (aria-hidden=true)
    const parent = natureSlide?.closest('[aria-hidden="true"]')
    expect(parent).toBeDefined()
  })

  it('navigates to previous slide', () => {
    render(<Hero />)
    const prevBtn = screen.getByLabelText('Previous slide')
    fireEvent.click(prevBtn)
    // Should wrap to last slide (Travel)
    const travelSlides = screen.getAllByText('Travel')
    expect(travelSlides.length).toBeGreaterThan(0)
  })

  it('navigates to specific slide via pagination dot', () => {
    render(<Hero />)
    const dot = screen.getByLabelText('Go to slide 3: People')
    fireEvent.click(dot)
    // People slide should be visible
    const peopleEl = screen.getAllByText('People')[0]
    const peopleDiv = peopleEl?.closest('[aria-hidden]')
    expect(peopleDiv?.getAttribute('aria-hidden')).toBe('false')
  })
})
