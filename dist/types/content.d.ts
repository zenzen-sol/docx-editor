/**
 * Document Content Model — barrel.
 *
 * All content-bearing types: runs, hyperlinks, bookmarks, fields,
 * images, shapes, tables, lists, paragraphs, headers/footers,
 * footnotes/endnotes, and sections.
 *
 * The types form a deeply interrelated tree (Paragraph ↔ Table ↔ ShapeTextBody)
 * and are split across `./content/*.ts` by domain. This file re-exports them
 * so existing imports from `@eigenpal/docx-editor-core/types/content` keep
 * working unchanged.
 * @packageDocumentation
 * @public
 */
export { B as BlockContent, v as BlockSdt, y as BookmarkEnd, z as BookmarkStart, w as BreakContent, A as Column, e as Comment, f as CommentRangeEnd, g as CommentRangeStart, G as ComplexField, h as Deletion, D as DocumentBody, J as DrawingContent, E as Endnote, K as EndnotePosition, L as EndnoteProperties, N as Field, O as FieldCharContent, Q as FieldType, U as FooterReference, F as Footnote, V as FootnotePosition, W as FootnoteProperties, x as HeaderFooter, X as HeaderFooterType, Y as HeaderReference, H as Hyperlink, I as Image, Z as ImageCrop, _ as ImagePadding, $ as ImagePosition, a0 as ImageSize, a1 as ImageTransform, a2 as ImageWrap, a3 as InlineSdt, i as Insertion, a4 as InstrTextContent, a5 as LineNumberRestart, a6 as MathEquation, M as MoveFrom, a7 as MoveFromRangeEnd, a8 as MoveFromRangeStart, j as MoveTo, a9 as MoveToRangeEnd, aa as MoveToRangeStart, ab as NoBreakHyphenContent, ac as NoteNumberRestart, ad as NoteRefMarkContent, ae as NoteReferenceContent, af as PageOrientation, P as Paragraph, k as ParagraphContent, a as ParagraphPropertyChange, ag as PropertyChangeInfo, ah as RenderedPageBreakContent, l as Run, m as RunContent, ai as RunPropertyChange, u as SdtDataBinding, t as SdtProperties, s as SdtType, aj as Section, S as SectionProperties, ak as SectionStart, al as SeparatorContent, am as Shape, an as ShapeContent, ao as ShapeFill, ap as ShapeOutline, aq as ShapeTextBody, ar as ShapeType, as as SimpleField, at as SoftHyphenContent, au as SymbolContent, av as TabContent, T as Table, n as TableCell, c as TableCellPropertyChange, b as TablePropertyChange, o as TableRow, d as TableRowPropertyChange, aw as TableStructuralChangeInfo, ax as TextBox, p as TextContent, q as TrackedChangeInfo, r as TrackedRunChange, ay as VerticalAlign } from '../content-BaHvReps.js';
export { P as PictureWatermark, T as TextWatermark, W as Watermark, p as pictureWatermarkDisplayEmu } from '../watermark-DAcnAs_J.js';
import '../formatting-JhqWT_XM.js';
import '../colors-C3vA7HUU.js';
import '../docx/wrapTypes.js';
import '../lists-Bn29SzeS.js';
