'use client';

import { useState } from 'react';

export function SystemPreview() {
  const [enabled, setEnabled] = useState(true);
  const [selected, setSelected] = useState('Medium');

  return (
    <div className="showcase" aria-label="Illustrative preview of CITE design elements">
      <div className="showcase-grid" aria-hidden="true" />
      <div className="showcase-cross cross-top" aria-hidden="true">+</div>
      <div className="showcase-cross cross-bottom" aria-hidden="true">+</div>

      <div className="canvas-card">
        <div className="canvas-header"><div className="canvas-brand"><img src="/brand/cite-icon.png" alt="" width="24" height="18" /><span>CITE <span className="canvas-slash">/</span> <span className="canvas-title">Elements</span></span></div><span className="canvas-dots" aria-hidden="true">•••</span></div>
        <div className="canvas-body">
          <div className="canvas-intro"><span>THE FOUNDATIONS</span><span>01 — 03</span></div>
          <div className="canvas-heading">A little more<br /><span>considered.</span><span className="sparkle" aria-hidden="true">✳</span></div>
          <div className="canvas-rule" />
          <div className="component-row"><span className="component-label">BUTTON</span><button className="demo-button" onClick={() => setEnabled(!enabled)}>Make it happen <span>↗</span></button></div>
          <div className="component-row"><span className="component-label">CONTROL</span><div className="demo-control"><span>Keep it simple</span><button className={`demo-switch ${enabled ? 'is-on' : ''}`} role="switch" aria-checked={enabled} aria-label="Toggle example setting" onClick={() => setEnabled(!enabled)}><span /></button></div></div>
          <div className="component-row"><span className="component-label">SELECT</span><div className="segmented" role="group" aria-label="Example size">{['Small', 'Medium', 'Large'].map(size => <button key={size} className={selected === size ? 'selected' : ''} aria-pressed={selected === size} onClick={() => setSelected(size)}>{size}</button>)}</div></div>
        </div>
      </div>

      <div className="floating-type" aria-hidden="true"><span>TYPE / 01</span><strong>Aa</strong><div><span>INTER</span><span>↗</span></div></div>
      <div className="floating-color" aria-hidden="true"><div className="color-block"><img src="/brand/cite-icon.png" alt="" width="39" height="28" /></div><div><span>PRIMARY</span><strong>#C41E3A</strong></div></div>
    </div>
  );
}
