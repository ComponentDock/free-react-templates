/**
 * Centered intro block inside the accordion card: "Prices" heading + muted
 * placeholder paragraph (same content kind as the reference).
 */
export function IntroBlock() {
  return (
    <div className="p-6 text-center">
      <h3 className="mb-2 text-[28px] font-medium text-black">Prices</h3>
      <p className="mx-auto max-w-md text-sm leading-[1.8] text-[#6c757d]">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics.
      </p>
    </div>
  )
}
