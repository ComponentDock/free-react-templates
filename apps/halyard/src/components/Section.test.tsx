import { render, screen, within } from '@testing-library/react'
import { HEADER_OFFSET, SECTIONS } from '../lib/site'
import { Section } from './Section'

const projectSection = SECTIONS.find((section) => section.id === 'refits')!
const plainSection = SECTIONS.find((section) => section.id === 'signal')!

describe('Section — one declared destination, materialised', () => {
  it('anchors itself on its own id, labelled by its own heading', () => {
    render(<Section section={projectSection} />)

    const node = screen.getByTestId('refits-section')

    expect(node.tagName).toBe('SECTION')
    expect(node).toHaveAttribute('id', 'refits')
    expect(node).toHaveAttribute('aria-labelledby', 'refits-heading')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(projectSection.heading)
    expect(within(node).getByText(projectSection.eyebrow)).toBeInTheDocument()
    expect(within(node).getByText(projectSection.body)).toBeInTheDocument()
  })

  it('keeps its heading clear of the bar it scrolls under', () => {
    render(<Section section={plainSection} />)

    const node = screen.getByTestId('signal-section')

    expect(node.getAttribute('style')).toContain(`scroll-margin-top: ${HEADER_OFFSET}px`)
  })

  it('draws its rows as cards, with a picture above the words only where it has one', () => {
    render(<Section section={projectSection} />)

    const items = screen.getByTestId('refits-items')

    expect(items.tagName).toBe('UL')
    expect(items.children).toHaveLength(3)

    const first = items.children[0] as HTMLElement

    expect(within(first).getByRole('heading', { level: 3 }).textContent).toBe(
      projectSection.items?.[0]?.title,
    )

    const picture = within(first).getByRole('img')

    expect(picture).toHaveAttribute('src', projectSection.items?.[0]?.image)
    expect(picture).toHaveAttribute('alt', projectSection.items?.[0]?.title)
    expect(picture).toHaveAttribute('loading', 'lazy')
  })

  it('leaves a section that is a list of things without a single picture', () => {
    render(<Section section={plainSection} />)

    const items = screen.getByTestId('signal-items')

    expect(items.children).toHaveLength(3)
    expect(within(items).queryAllByRole('img')).toHaveLength(0)
  })

  it('renders a section with no rows at all without a grid', () => {
    const bare = { ...plainSection, id: 'bare', items: undefined }

    render(<Section section={bare} />)

    expect(screen.getByTestId('bare-section')).toBeInTheDocument()
    expect(screen.queryByTestId('bare-items')).toBeNull()
  })
})
