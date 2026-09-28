import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Specialties } from './Specialties'

// jsdom does not have scrollBy
beforeAll(() => {
  Element.prototype.scrollBy = vi.fn()
})

describe('Specialties', () => {
  it('renders the section heading', () => {
    render(<Specialties />)
    expect(screen.getByText('Our Specialties')).toBeInTheDocument()
  })

  it('renders all specialty cards', () => {
    render(<Specialties />)
    expect(screen.getByText('Grilled Egg With Garlic')).toBeInTheDocument()
    expect(screen.getByText('Tropical Fruit Salad')).toBeInTheDocument()
    expect(screen.getByText('Italian Pizza Margherita')).toBeInTheDocument()
    expect(screen.getByText('Grilled Beef Tenderloin')).toBeInTheDocument()
    expect(screen.getByText('Lobster Thermidor')).toBeInTheDocument()
    expect(screen.getByText('Chocolate Lava Cake')).toBeInTheDocument()
  })

  it('renders scroll right button initially (scroll left hidden when at start)', () => {
    render(<Specialties />)
    expect(screen.getByRole('button', { name: /scroll right/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /scroll left/i })).not.toBeInTheDocument()
  })

  it('scroll right button calls scrollBy', async () => {
    const user = userEvent.setup()
    render(<Specialties />)
    const rightBtn = screen.getByRole('button', { name: /scroll right/i })
    await user.click(rightBtn)
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })

  it('checkScroll runs on scroll and updates canScrollLeft', () => {
    const { container } = render(<Specialties />)
    const scrollContainer = container.querySelector('.overflow-x-auto')!
    // Use a writable scrollLeft property
    let scrollLeftVal = 0
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      get: () => scrollLeftVal,
      set: (v: number) => {
        scrollLeftVal = v
      },
      configurable: true,
    })
    Object.defineProperty(scrollContainer, 'scrollWidth', { value: 1000, configurable: true })
    Object.defineProperty(scrollContainer, 'clientWidth', { value: 400, configurable: true })

    // Simulate scroll to position 100
    scrollLeftVal = 100
    fireEvent.scroll(scrollContainer)
    // Left button should appear
    expect(screen.getByRole('button', { name: /scroll left/i })).toBeInTheDocument()
  })

  it('checkScroll sets canScrollRight false when near end', () => {
    const { container } = render(<Specialties />)
    const scrollContainer = container.querySelector('.overflow-x-auto')!
    let scrollLeftVal = 0
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      get: () => scrollLeftVal,
      set: (v: number) => {
        scrollLeftVal = v
      },
      configurable: true,
    })
    Object.defineProperty(scrollContainer, 'scrollWidth', { value: 600, configurable: true })
    Object.defineProperty(scrollContainer, 'clientWidth', { value: 400, configurable: true })

    // Scroll to end: scrollLeft = 200 (600 - 400 - 10 = 190, so 200 > 190)
    scrollLeftVal = 200
    fireEvent.scroll(scrollContainer)
    // Right button should be hidden
    expect(screen.queryByRole('button', { name: /scroll right/i })).not.toBeInTheDocument()
  })

  it('scroll left button calls scrollBy', async () => {
    const user = userEvent.setup()
    const { container } = render(<Specialties />)
    const scrollContainer = container.querySelector('.overflow-x-auto')!
    let scrollLeftVal = 0
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      get: () => scrollLeftVal,
      set: (v: number) => {
        scrollLeftVal = v
      },
      configurable: true,
    })
    Object.defineProperty(scrollContainer, 'scrollWidth', { value: 1000, configurable: true })
    Object.defineProperty(scrollContainer, 'clientWidth', { value: 400, configurable: true })

    // Make left button visible
    scrollLeftVal = 100
    fireEvent.scroll(scrollContainer)

    const leftBtn = screen.getByRole('button', { name: /scroll left/i })
    await user.click(leftBtn)
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })
})
