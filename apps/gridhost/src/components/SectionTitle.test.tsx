import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('centres a navy 50px heading by default, with the pink rule before the eyebrow', () => {
    render(<SectionTitle eyebrow="What we build" title="Services on the grid" />)

    expect(screen.getByText('What we build')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 2, name: 'Services on the grid' })
    expect(heading).toHaveClass('text-navy-heading', 'min-[768px]:text-[50px]')
    expect(heading.parentElement).toHaveClass('items-center', 'text-center')
  })

  it('can align left on a dark band at the 44px size', () => {
    render(
      <SectionTitle
        eyebrow="Support"
        title="We answer at any hour"
        align="left"
        tone="support"
        size="md"
        className="max-w-[420px]"
      />,
    )

    const heading = screen.getByRole('heading', { level: 2, name: 'We answer at any hour' })
    expect(heading).toHaveClass('text-support-heading', 'min-[768px]:text-[44px]')
    expect(heading.parentElement).toHaveClass('items-start', 'text-left', 'max-w-[420px]')
  })

  it('offers a white variant for photo bands', () => {
    render(<SectionTitle eyebrow="Domains" title="Find your address" tone="light" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Find your address' })).toHaveClass(
      'text-white',
    )
  })
})
