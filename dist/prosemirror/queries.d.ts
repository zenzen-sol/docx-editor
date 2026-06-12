import { EditorView } from 'prosemirror-view';
import { Layout } from '../layout-engine/types.js';
import '../content-BaHvReps.js';
import '../formatting-JhqWT_XM.js';
import '../colors-C3vA7HUU.js';
import '../docx/wrapTypes.js';
import '../lists-Bn29SzeS.js';
import '../watermark-DAcnAs_J.js';

/**
 * Pure ref-API query helpers — read-only inspectors over the PM document
 * and the paginated layout. Back the adapters' `findInDocument`,
 * `getSelectionInfo`, and `getPageContent` ref methods.
 *
 * Every function takes the PM view (or layout + view) as a parameter
 * instead of closing over a framework ref, so the React and Vue adapters
 * (and the future vanilla wrapper) share one implementation.
 */

interface FindInDocumentMatch {
    paraId: string;
    match: string;
    before: string;
    after: string;
}
/**
 * Walk the PM doc looking for `query`. Returns up to `limit` matches —
 * one per paragraph (rejects paragraphs where the query appears more
 * than once, mirroring `findTextInPmParagraph`'s ambiguity guard so the
 * LLM gets a clearer error than a silent mistarget).
 */
declare function findInDocument(view: EditorView | null, query: string, opts?: {
    caseSensitive?: boolean;
    limit?: number;
}): FindInDocumentMatch[];
interface SelectionInfo {
    paraId: string | null;
    selectedText: string;
    paragraphText: string;
    before: string;
    after: string;
}
/**
 * Describe the current selection in agent-readable form — paraId of the
 * containing paragraph, the selected text, the full paragraph text, and
 * the leading/trailing slices. Vanilla view: insertion-marked text never
 * appears, matching what the agent reads and can anchor against.
 */
declare function getSelectionInfo(view: EditorView | null): SelectionInfo | null;
interface PageContent {
    pageNumber: number;
    text: string;
    paragraphs: Array<{
        paraId: string;
        text: string;
        styleId?: string;
    }>;
}
/**
 * Collect paragraphs visible on `pageNumber` (1-indexed) from the
 * paginated `layout`. Dedupes by paraId so paragraphs split across page
 * boundaries are reported once.
 */
declare function getPageContent(view: EditorView | null, layout: Layout | null, pageNumber: number): PageContent | null;

export { type FindInDocumentMatch, type PageContent, type SelectionInfo, findInDocument, getPageContent, getSelectionInfo };
