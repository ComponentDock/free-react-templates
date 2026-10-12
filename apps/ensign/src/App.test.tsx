import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { DESKTOP_NAV_ID, DOCK_URL, NAV, PAGE_TITLE, SECTIONS, allDestinations } from './lib/site'
import { carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/** Every file that ships with the app, read through Vite so no shell is involved. */
const raw = import.meta.glob(['./**/*.{ts,tsx,css}', '../index.html', '../package.json', '../public/CNAME'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const files = Object.entries(raw)

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stacks the band with its bar, one section per destination, and the credit strip', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toContain('flex')
    expect(page.className).toContain('bg-page')
    expect(page.className).toContain('font-sans')
    expect(page.children[0]?.tagName).toBe('A')
    expect(page.children[1]?.tagName).toBe('SECTION')
    expect(page.children[2]?.tagName).toBe('MAIN')
    expect(page.children[3]?.tagName).toBe('FOOTER')

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', '#watch')
    expect(skip.className).toContain('sr-only')
  })

  it('materialises all eleven destinations the bar declares, in order', () => {
    const { container } = render(<App />)

    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(7)

    for (const destination of allDestinations()) {
      const target = container.querySelector(destination)

      expect(target).not.toBeNull()
      expect(target?.tagName).toBe('SECTION')
    }

    const ids = Array.from(container.querySelectorAll('main > section')).map((section) => section.id)

    expect(ids).toEqual(SECTIONS.map((section) => section.id))
  })

  it('leaves no dead link anywhere on the page', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]
    const inPage = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('#'))

    expect(anchors.length).toBeGreaterThanOrEqual(9)
    expect(anchors.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)

    for (const anchor of inPage) {
      expect(container.querySelector(anchor.getAttribute('href')!)).not.toBeNull()
    }

    const leaving = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('http'))

    expect(leaving).toHaveLength(1)
    expect(leaving[0]).toHaveAttribute('href', DOCK_URL)
  })

  it('runs several viewports long with a picture under every card that declares one', () => {
    const { container } = render(<App />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(3)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/ensign-')
    }

    expect(container.querySelectorAll('main > section')).toHaveLength(11)
  })

  it('keeps the bar in the flow, where nothing pins it', () => {
    render(<App />)

    const bar = screen.getByTestId('bar')

    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(screen.getByTestId('band').className).toContain('py-28')
    expect(screen.getByTestId('band').lastElementChild).toBe(bar)
  })

  it('folds the panel away once a folded row is chosen', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Browse' }))

    const panel = screen.getByTestId('panel-nav')

    await user.click(within(panel).getByRole('link', { name: 'Tides' }))

    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })

  it('reads every row of the model into the bar without a single source string', () => {
    render(<App />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))

    const text = document.body.textContent ?? ''

    expect(carriesSourceText(text)).toBe(false)
    expect(carriesSourceText(NAV.map((item) => item.label).join(' '))).toBe(false)
  })

  it('ships no source strings and no source name in its own files', () => {
    expect(files.length).toBeGreaterThan(20)

    for (const [path, content] of files) {
      expect({ path, carriesSourceText: carriesSourceText(content) }).toEqual({
        path,
        carriesSourceText: false,
      })
    }
  })

  it('recognises the source strings it forbids, and nothing that merely looks like them', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} yard`)).toBe(true)
    expect(carriesSourceText('a restored yard')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('ensign.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://ensign.free.componentdock.com"')
  })
})
