import { ActionRow } from './components/ActionRow'
import { ChapterStrip } from './components/ChapterStrip'
import { FilmDialog } from './components/FilmDialog'
import { HeroCopy } from './components/HeroCopy'
import { Scene } from './components/Scene'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TITLE_ID, TOP_ID } from './data/site'
import { useFilmPlayer } from './hooks/useFilmPlayer'

/**
 * Alpenglow — one full-height hero. The scene comes first so its negative
 * z-index and the shell's own stacking context keep it behind everything
 * without a hack; the bar, the hero and the chapter strip follow, and the
 * dialog closes the page so its backdrop covers the whole shell.
 */
export function App() {
  const player = useFilmPlayer()

  return (
    <div className={`ap-shell${player.paused ? ' is-paused' : ''}`} id={TOP_ID}>
      <Scene />

      <SiteHeader />

      <main className="ap-main">
        <section className="ap-hero" aria-labelledby={TITLE_ID}>
          <HeroCopy />
          <ActionRow onPlay={player.open} playRef={player.playRef} />
        </section>

        <ChapterStrip />
      </main>

      <SiteFooter />

      <FilmDialog
        dialogRef={player.dialogRef}
        closeRef={player.closeRef}
        onDismiss={player.close}
        onBackdropClick={player.onBackdropClick}
        onClose={player.onClose}
      />
    </div>
  )
}
