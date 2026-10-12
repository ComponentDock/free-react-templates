import { fireEvent, render, screen } from '@testing-library/react'
import { COUPLE, KICKER } from '../lib/site'
import { Hero } from './Hero'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

function setScrollY(value: number): void {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('the hero', () => {
  it('sets the invitation line and the couple names between two flourishes', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText(KICKER)).toBeInTheDocument()

    const names = screen.getByRole('heading', { level: 3 })

    expect(names).toHaveTextContent(COUPLE)
    expect(tokens(names)).toContain('text-brand')
    expect(tokens(names)).toContain('md:text-[48px]')
    expect(container.querySelectorAll('[data-ornament]')).toHaveLength(2)
  })

  it('puts the photograph full-bleed behind a dark wash', () => {
    const { container } = render(<Hero />)

    const photo = screen.getByTestId('hero-photo')

    expect(photo.style.backgroundImage).toContain('picsum.photos/seed/trousseau-1/1920/1080')
    expect(tokens(photo)).toContain('bg-cover')
    expect(container.querySelector('[class*="bg-scrim"]')).not.toBeNull()
    expect(tokens(screen.getByRole('region', { name: 'The wedding day' }))).toContain('min-h-[800px]')
  })

  it('drifts the photograph against the scroll at half rate', () => {
    setScrollY(0)
    render(<Hero />)

    const photo = screen.getByTestId('hero-photo')

    expect(photo.style.transform).toBe('translateY(0px)')

    setScrollY(400)
    fireEvent.scroll(window)

    expect(photo.style.transform).toBe('translateY(200px)')
  })

  it('leaves the photograph still when reduced motion is asked for', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)
    setScrollY(400)
    render(<Hero />)

    const photo = screen.getByTestId('hero-photo')

    expect(photo.style.transform).toBe('')

    fireEvent.scroll(window)

    expect(photo.style.transform).toBe('')
  })
})
