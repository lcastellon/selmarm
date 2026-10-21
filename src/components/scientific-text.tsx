/**
 * Scientific names (genus + species, or genus alone) must always render in
 * italics. Add a taxon to SCIENTIFIC_NAMES and every string passed through
 * <ScientificText> picks it up automatically.
 */
const SCIENTIFIC_NAMES = [
  "Pseudocrossidium replicatum",
  "P. replicatum",
  "Pseudocrossidium",
  "Colletotrichum gloeosporioides",
  "Colletotrichum",
];

const pattern = [...SCIENTIFIC_NAMES]
  .sort((a, b) => b.length - a.length)
  .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|");

const SCIENTIFIC_NAME = new RegExp(`(${pattern})`, "g");

export function ScientificText({ text }: { text: string }) {
  return (
    <>
      {text.split(SCIENTIFIC_NAME).map((part, i) =>
        i % 2 ? (
          <em className="scientific-name" key={i}>
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </>
  );
}
