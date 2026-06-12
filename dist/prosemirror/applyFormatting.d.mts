import { EditorView } from 'prosemirror-view';
import { StyleResolver } from './styles/index.mjs';
import { N as NumberingMap } from '../numberingParser-nSPZlzKr.mjs';
import '../formatting-DFtuRFQY.mjs';
import '../colors-C3vA7HUU.mjs';
import '../styles-Dqec8Aw6.mjs';
import '../lists-CyGxd5Y2.mjs';

/**
 * Agent-facing formatting operations shared by the React and Vue adapters.
 *
 * `applyFormatting` maps a mark-toggle request (bold/italic/underline/strike/
 * color/highlight/fontSize/fontFamily) onto a PM transaction over a paragraph
 * range located by `paraId` (+ optional `search`). `setParagraphStyle` applies
 * a named paragraph style to that range.
 *
 * Both take the `EditorView` as a parameter. `setParagraphStyle` takes the
 * style resolver as an injected dependency so each adapter keeps its own
 * resolver-sourcing strategy (React caches per styles object; Vue rebuilds).
 *
 * Previously duplicated byte-for-byte at
 * `packages/react/.../useDocxEditorRefApi.ts` and
 * `packages/vue/.../useFormattingActions.ts`.
 */

interface ApplyFormattingOptions {
    paraId: string;
    search?: string;
    marks: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean | {
            style?: string;
        };
        strike?: boolean;
        color?: {
            rgb?: string;
            themeColor?: string;
        };
        highlight?: string;
        fontSize?: number;
        fontFamily?: {
            ascii?: string;
            hAnsi?: string;
        };
    };
}
/**
 * Apply mark toggles to a paragraph range. Returns false when the paraId /
 * search can't be resolved; true (a no-op) when the resolved range is empty.
 */
declare function applyFormatting(view: EditorView, options: ApplyFormattingOptions): boolean;
/**
 * Apply a named paragraph style to the paragraph identified by `paraId`.
 *
 * The style resolver is injected: when present, unknown styleIds are rejected
 * (the agent gets a clear error instead of a silently-broken `<w:pStyle>`), and
 * the resolved paragraph/run formatting is threaded into `applyStyle`. Without
 * a resolver (no styles loaded) the styleId is applied as-is. Returns false
 * when the paraId can't be resolved or the styleId is unknown.
 */
declare function setParagraphStyle(view: EditorView, options: {
    paraId: string;
    styleId: string;
}, deps: {
    styleResolver: StyleResolver | null;
    numbering?: NumberingMap | null;
}): boolean;

export { type ApplyFormattingOptions, applyFormatting, setParagraphStyle };
