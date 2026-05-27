import { useState, useEffect } from 'react';

type LineKind = 'cmd' | 'out';

interface Line {
  kind: LineKind;
  text: string;
}

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'git clone github.com/noahfoe/flux-survivor' },
  { kind: 'out', text: "Cloning into 'flux-survivor'... done." },
  { kind: 'cmd', text: 'flutter run --release' },
  { kind: 'out', text: '✓  Build complete — launching on device' },
  { kind: 'cmd', text: 'npm run dev' },
  { kind: 'out', text: '➜  VITE v8 ready in 412ms' },
  { kind: 'cmd', text: 'echo $AVAILABILITY' },
  { kind: 'out', text: 'open_to_work=true' },
];

const SPEED_CMD = 38;
const SPEED_OUT = 12;
const PAUSE_AFTER_CMD = 180;
const PAUSE_AFTER_OUT = 360;

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= SCRIPT.length) return;

    const target = SCRIPT[lineIdx];

    // Append a new empty line entry when we start a new script line
    if (lines.length <= lineIdx) {
      setLines(prev => [...prev, { kind: target.kind, text: '' }]);
      return;
    }

    if (charIdx < target.text.length) {
      const speed = target.kind === 'cmd' ? SPEED_CMD : SPEED_OUT;
      const t = setTimeout(() => {
        setLines(prev => {
          const next = [...prev];
          next[lineIdx] = { kind: target.kind, text: target.text.slice(0, charIdx + 1) };
          return next;
        });
        setCharIdx(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    const pause = target.kind === 'cmd' ? PAUSE_AFTER_CMD : PAUSE_AFTER_OUT;
    const t = setTimeout(() => {
      setLineIdx(i => i + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, lines.length]);

  const done = lineIdx >= SCRIPT.length;
  const activelyCmdTyping = !done && lineIdx < SCRIPT.length && SCRIPT[lineIdx].kind === 'cmd';

  return (
    <div
      style={{
        background: '#050609',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        overflow: 'hidden',
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: 13,
        lineHeight: 1.65,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '10px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'block', flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', display: 'block', flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'block', flexShrink: 0 }} />
        <span
          style={{
            marginLeft: 10,
            color: 'rgba(255,255,255,0.22)',
            fontSize: 11,
            letterSpacing: '0.03em',
            userSelect: 'none',
          }}
        >
          ~/portfolio
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px', minHeight: 190 }}>
        {lines.map((line, i) => {
          const isCurrentLine = i === lineIdx;
          const isTyping = isCurrentLine && !done;

          if (line.kind === 'cmd') {
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', marginBottom: 2 }}>
                <span
                  style={{
                    color: '#fb923c',
                    marginRight: 8,
                    userSelect: 'none',
                    fontSize: 15,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  ›
                </span>
                <span style={{ color: '#edeef1', wordBreak: 'break-all' }}>
                  {line.text}
                  {isTyping && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 7,
                        height: 13,
                        background: '#fb923c',
                        marginLeft: 1,
                        verticalAlign: 'text-bottom',
                        animation: 'blink 0.9s step-end infinite',
                      }}
                    />
                  )}
                </span>
              </div>
            );
          }

          return (
            <div key={i} style={{ marginBottom: 8, paddingLeft: 20 }}>
              <span style={{ color: 'rgba(255,255,255,0.38)' }}>{line.text}</span>
            </div>
          );
        })}

        {/* Idle cursor after script finishes */}
        {done && (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ color: '#fb923c', marginRight: 8, fontSize: 15, lineHeight: 1 }}>›</span>
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 13,
                background: '#fb923c',
                animation: 'blink 0.9s step-end infinite',
                verticalAlign: 'text-bottom',
              }}
            />
          </div>
        )}

        {/* Show cursor on cmd line while out lines are animating below */}
        {!done && !activelyCmdTyping && lineIdx > 0 && SCRIPT[lineIdx - 1]?.kind === 'out' && (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ color: '#fb923c', marginRight: 8, fontSize: 15, lineHeight: 1 }}>›</span>
          </div>
        )}
      </div>
    </div>
  );
}
