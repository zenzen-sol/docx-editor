/**
 * Comprehensive TypeScript types for full DOCX document representation
 *
 * This barrel file re-exports all types from the split modules.
 * Existing imports from './types/document' continue to work unchanged.
 *
 * Module structure:
 * - colors.ts      — Color primitives, borders, shading
 * - formatting.ts  — Text, paragraph, and table formatting properties
 * - lists.ts       — Numbering and list definitions
 * - content.ts     — Content model (runs, images, shapes, tables, paragraphs, sections)
 * - styles.ts      — Styles, theme, fonts, relationships, media
 * @packageDocumentation
 * @public
 */
export { B as BorderSpec, C as ColorValue, S as ShadingProperties, T as ThemeColorSlot } from '../colors-C3vA7HUU.mjs';
export { C as CellMargins, g as ConditionalFormatStyle, E as EmphasisMark, F as FloatingTableProperties, L as LineSpacingRule, d as ParagraphAlignment, P as ParagraphFormatting, h as TabLeader, e as TabStop, i as TabStopAlignment, j as TableBorders, c as TableCellFormatting, a as TableFormatting, f as TableLook, k as TableMeasurement, b as TableRowFormatting, l as TableWidthType, m as TextEffect, T as TextFormatting, U as UnderlineStyle } from '../formatting-DFtuRFQY.mjs';
import { a as NumberingDefinitions } from '../lists-CyGxd5Y2.mjs';
export { A as AbstractNumbering, d as LevelSuffix, L as ListLevel, c as ListRendering, N as NumberFormat, b as NumberingInstance } from '../lists-CyGxd5Y2.mjs';
import { D as DocumentBody, F as Footnote, E as Endnote, x as HeaderFooter } from '../content-CZhbNlRP.mjs';
export { B as BlockContent, v as BlockSdt, y as BookmarkEnd, z as BookmarkStart, w as BreakContent, A as Column, e as Comment, f as CommentRangeEnd, g as CommentRangeStart, G as ComplexField, h as Deletion, J as DrawingContent, K as EndnotePosition, L as EndnoteProperties, N as Field, O as FieldCharContent, Q as FieldType, U as FooterReference, V as FootnotePosition, W as FootnoteProperties, X as HeaderFooterType, Y as HeaderReference, H as Hyperlink, I as Image, Z as ImageCrop, _ as ImagePadding, $ as ImagePosition, a0 as ImageSize, a1 as ImageTransform, a2 as ImageWrap, a3 as InlineSdt, i as Insertion, a4 as InstrTextContent, a5 as LineNumberRestart, a6 as MathEquation, M as MoveFrom, a7 as MoveFromRangeEnd, a8 as MoveFromRangeStart, j as MoveTo, a9 as MoveToRangeEnd, aa as MoveToRangeStart, ab as NoBreakHyphenContent, ac as NoteNumberRestart, ad as NoteRefMarkContent, ae as NoteReferenceContent, af as PageOrientation, P as Paragraph, k as ParagraphContent, a as ParagraphPropertyChange, ag as PropertyChangeInfo, ah as RenderedPageBreakContent, l as Run, m as RunContent, ai as RunPropertyChange, u as SdtDataBinding, t as SdtProperties, s as SdtType, aj as Section, S as SectionProperties, ak as SectionStart, al as SeparatorContent, am as Shape, an as ShapeContent, ao as ShapeFill, ap as ShapeOutline, aq as ShapeTextBody, ar as ShapeType, as as SimpleField, at as SoftHyphenContent, au as SymbolContent, av as TabContent, T as Table, n as TableCell, c as TableCellPropertyChange, b as TablePropertyChange, o as TableRow, d as TableRowPropertyChange, aw as TableStructuralChangeInfo, ax as TextBox, p as TextContent, q as TrackedChangeInfo, r as TrackedRunChange, ay as VerticalAlign } from '../content-CZhbNlRP.mjs';
export { P as PictureWatermark, T as TextWatermark, W as Watermark, p as pictureWatermarkDisplayEmu } from '../watermark-DAcnAs_J.mjs';
import { S as StyleDefinitions, T as Theme, F as FontTable, b as RelationshipMap, M as MediaFile } from '../styles-Dqec8Aw6.mjs';
export { D as DocDefaults, c as FontInfo, R as Relationship, d as RelationshipType, a as Style, e as StyleType, f as ThemeColorScheme, g as ThemeFont, h as ThemeFontScheme } from '../styles-Dqec8Aw6.mjs';
import '../docx/wrapTypes.mjs';

/**
 * settings.xml parser
 *
 * Extracts document-wide settings the layout pipeline needs at render time.
 * We only read what's currently consumed; most of settings.xml (compatibility
 * flags, view state, autoformat) is irrelevant to layout.
 */
/** Document-wide settings parsed from `word/settings.xml`. */
interface DocumentSettings {
    /**
     * `w:defaultTabStop` (§17.6.13) — interval in twips between default tab
     * stops applied when a paragraph has no custom `w:tabs`. Word's default
     * if unspecified is 720 twips (0.5 inch).
     */
    defaultTabStop: number;
}

/**
 * Comprehensive TypeScript types for full DOCX document representation
 *
 * This barrel file re-exports all types from the split modules.
 * Existing imports from './types/document' continue to work unchanged.
 *
 * Module structure:
 * - colors.ts      — Color primitives, borders, shading
 * - formatting.ts  — Text, paragraph, and table formatting properties
 * - lists.ts       — Numbering and list definitions
 * - content.ts     — Content model (runs, images, shapes, tables, paragraphs, sections)
 * - styles.ts      — Styles, theme, fonts, relationships, media
 * @packageDocumentation
 * @public
 */

/**
 * Complete DOCX package structure
 */
interface DocxPackage {
    /** Document body */
    document: DocumentBody;
    /** Style definitions */
    styles?: StyleDefinitions;
    /** Theme */
    theme?: Theme;
    /** Numbering definitions */
    numbering?: NumberingDefinitions;
    /** Document-wide settings from `word/settings.xml` */
    settings?: DocumentSettings;
    /** Font table */
    fontTable?: FontTable;
    /** Footnotes (normal notes only — separators live in `footnoteSeparators`) */
    footnotes?: Footnote[];
    /** Endnotes (normal notes only — separators live in `endnoteSeparators`) */
    endnotes?: Endnote[];
    /**
     * Separator footnotes (`w:type="separator"` / `"continuationSeparator"` /
     * `"continuationNotice"`) kept out of `footnotes` so rendering/layout only
     * sees real notes. Retained for round-trip: Word rejects a footnotes part
     * whose separator notes are missing, so the serializer re-emits these ahead
     * of the normal notes.
     */
    footnoteSeparators?: Footnote[];
    /** Separator endnotes — see `footnoteSeparators`. */
    endnoteSeparators?: Endnote[];
    /** Headers by relationship ID */
    headers?: Map<string, HeaderFooter>;
    /** Footers by relationship ID */
    footers?: Map<string, HeaderFooter>;
    /** Document relationships */
    relationships?: RelationshipMap;
    /** Media files */
    media?: Map<string, MediaFile>;
    /** Document properties */
    properties?: {
        title?: string;
        subject?: string;
        creator?: string;
        keywords?: string;
        description?: string;
        lastModifiedBy?: string;
        revision?: number;
        created?: Date;
        modified?: Date;
    };
}
/**
 * Top-level parsed DOCX document — the result of `parseDocx(buffer)`.
 *
 * Wraps the unzipped DOCX package (`document.xml`, `styles.xml`, etc.),
 * the original buffer for round-trip saves, and any template variables /
 * parse warnings detected during ingestion.
 *
 * @example
 * ```ts
 * import { parseDocx } from '@eigenpal/docx-editor-core/headless';
 * const doc = await parseDocx(buffer);
 * console.log(doc.package.document.content.length);
 * ```
 */
interface Document {
    /** Parsed DOCX package — body, styles, numbering, theme, media, headers/footers. */
    package: DocxPackage;
    /** Original DOCX buffer. Kept for round-trip saves that preserve untouched parts. */
    originalBuffer?: ArrayBuffer;
    /** Detected docxtemplater variables (e.g. `{name}`, `{address}`). Populated when the document is recognized as a template. */
    templateVariables?: string[];
    /** Non-fatal parser diagnostics — malformed parts, unsupported features, fallbacks. */
    warnings?: string[];
}

export { type Document, DocumentBody, type DocumentSettings, type DocxPackage, Endnote, FontTable, Footnote, HeaderFooter, MediaFile, NumberingDefinitions, RelationshipMap, StyleDefinitions, Theme };
