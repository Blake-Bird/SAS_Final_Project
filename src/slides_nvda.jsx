// slides_nvda.jsx
import React from 'react';

export const slides = [
  // 1. NVIDIA – hero splash
  {
    id: 1,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          {/* Top strip */}
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>NVDA</span>
            </div>
            <div className="nvda-chip">2018–2030</div>
          </div>

          {/* Title */}
          <div className="nvda-heading-row">
            <div className="nvda-heading">NVIDIA</div>
          </div>

          {/* Two-column hero layout */}
          <div className="nvda-row">
            {/* Left: main world + line */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal emphasis' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    {/* History vs forecast worlds */}
                    <div
                      className={`world-layer history ${
                        step >= 1 ? 'anim-world-history' : ''
                      }`}
                    />
                    {step >= 3 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}

                    {/* Draw-in trajectory */}
                    <div className="graph-line">
                      <div
                        className={`graph-line-path ${
                          step >= 2 ? 'anim-graph-draw' : ''
                        }`}
                      />
                      {/* Key points – early years */}
                      {[
                        { left: '8%', top: '72%' },
                        { left: '24%', top: '66%' },
                        { left: '40%', top: '59%' },
                        { left: '56%', top: '45%' },
                        { left: '72%', top: '37%' },
                      ].map((p, idx) => (
                        <div
                          key={idx}
                          className={`graph-point ${
                            step >= 2 ? 'visible' : ''
                          }`}
                          style={p}
                        />
                      ))}
                      {/* Forecast point – 2030 */}
                      <div
                        className={`graph-point ${
                          step >= 4 ? 'visible' : ''
                        }`}
                        style={{ left: '90%', top: '28%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 2030 big call */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">2030 Rev</div>
                <div className={`halo-wrap ${step >= 3 ? 'anim-halo' : ''}`}>
                  <div className="halo-ring" />
                  <div
                    className={`stat-number ${
                      step >= 4 ? 'stat-pulse' : ''
                    }`}
                  >
                    $XXXB
                  </div>
                </div>
                <div className="stat-number-sub">Model View</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 2. Context – NVDA world
  {
    id: 2,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Context</span>
            </div>
            <div className="nvda-chip">AI · GPUs</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">CONTEXT</div>
          </div>

          <div className="nvda-row">
            {/* Left: sector scatter */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas scatter-layer">
                    <div
                      className={`scatter-dot ${
                        step >= 1 ? 'anim-data-bloom' : ''
                      }`}
                      style={{ left: '28%', top: '32%' }}
                    />
                    <div
                      className={`scatter-dot ${
                        step >= 1 ? 'anim-data-bloom' : ''
                      }`}
                      style={{ left: '68%', top: '40%' }}
                    />
                    <div
                      className={`scatter-dot ${
                        step >= 2 ? 'anim-data-bloom' : ''
                      }`}
                      style={{ left: '52%', top: '60%' }}
                    />
                    <div
                      className={`scatter-dot ${
                        step >= 3 ? 'anim-data-bloom' : ''
                      }`}
                      style={{ left: '30%', top: '65%' }}
                    />
                    <div className="data-line-overlay" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: clean chips */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">AI</div>
                  <div className="interactive-pill">Gaming</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Auto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 3. Process – flow
  {
    id: 3,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Flow</span>
            </div>
            <div className="nvda-chip">Process</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">PROCESS</div>
          </div>

          <div className="nvda-row">
            {/* Left: pipeline timeline */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="timeline-strip">
                  {['Raw', 'Clean', 'Ratios', 'Proj'].map((label, idx) => (
                    <div key={label} className="timeline-node">
                      <div
                        className={`timeline-dot ${
                          step >= idx + 2 ? 'active' : ''
                        }`}
                      />
                      <div>{label}</div>
                    </div>
                  ))}
                  <div
                    className={`timeline-sweep ${
                      step >= 3 ? 'anim-timeline-sweep' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right: source chips */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">PL</div>
                  <div className="interactive-pill">BS</div>
                  <div className="interactive-pill">CF</div>
                  <div className="interactive-pill">DRV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 4. Inflection – hot years
  {
    id: 4,
    maxStep: 3,
    render(step) {
      const years = ['18', '19', '20', '21', '22', '23'];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Turn</span>
            </div>
            <div className="nvda-chip">Inflection</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">INFLECTION</div>
          </div>

          <div className="nvda-row">
            {/* Bars with heat fade */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal emphasis' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => {
                      const isHot = idx >= 2; // 2020–2023
                      const target =
                        idx === 2
                          ? '60%'
                          : idx === 3
                          ? '82%'
                          : idx === 4
                          ? '90%'
                          : idx === 5
                          ? '94%'
                          : '42%';
                      return (
                        <div key={y} className="bar-column">
                          <div className="bar-shell">
                            <div
                              className={`bar-fill ${
                                step >= 2
                                  ? isHot
                                    ? 'hot'
                                    : 'normal'
                                  : ''
                              }`}
                              style={{ '--bar-target': target }}
                            />
                          </div>
                          <div className="bar-year">{y}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Short label */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Shift</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  AI Run
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 5. Revenue – history + 2030
  {
    id: 5,
    maxStep: 4,
    render(step) {
      const years = ['18', '19', '20', '21', '22', '23', '30'];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Rev</span>
            </div>
            <div className="nvda-chip">Revenue</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">REVENUE</div>
          </div>

          <div className="nvda-row">
            {/* Line points */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div className="graph-line">
                      <div
                        className={`graph-line-path ${
                          step >= 2 ? 'anim-graph-draw' : ''
                        }`}
                      />
                      {years.map((y, idx) => (
                        <div
                          key={y}
                          className={`graph-point ${
                            step >= 3 && idx <= 5
                              ? 'visible'
                              : step >= 4 && idx === 6
                              ? 'visible'
                              : ''
                          }`}
                          style={{
                            left: `${8 + idx * 13}%`,
                            top:
                              idx < 2
                                ? '68%'
                                : idx < 4
                                ? '56%'
                                : idx < 6
                                ? '42%'
                                : '30%',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CAGR */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">CAGR</div>
                <div
                  className={`stat-number ${
                    step >= 4 ? 'stat-pulse' : ''
                  }`}
                >
                  XX%
                </div>
                <div className="stat-number-sub">2018–2030</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 6. Profit – NI & FCF
  {
    id: 6,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Profit</span>
            </div>
            <div className="nvda-chip">NI · FCF</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">PROFIT</div>
          </div>

          <div className="nvda-row">
            {/* NI */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">NI</div>
                <div
                  className={`stat-number ${
                    step >= 2 ? 'stat-pulse' : ''
                  }`}
                >
                  ↑
                </div>
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[40, 46, 54, 70, 86, 94].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill normal"
                            style={{ '--bar-target': `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FCF */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">FCF</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  ↑
                </div>
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[38, 45, 58, 74, 90, 97].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill normal"
                            style={{ '--bar-target': `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 7. Margins – gross vs net heat
  {
    id: 7,
    maxStep: 3,
    render(step) {
      const years = ['18', '19', '20', '21', '22', '23'];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Margin</span>
            </div>
            <div className="nvda-chip">Gross · Net</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">MARGINS</div>
          </div>

          <div className="nvda-row">
            {/* Heat bars */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal emphasis' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => (
                      <div key={y} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill hot"
                            style={{
                              '--bar-target': `${60 + idx * 4}%`,
                            }}
                          />
                        </div>
                        <div className="bar-year">{y}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Resilience</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  High
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 8. Assets – stacked worlds
  {
    id: 8,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Assets</span>
            </div>
            <div className="nvda-chip">Structure</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">ASSETS</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div
                      className={`world-layer history ${
                        step >= 1 ? 'anim-world-history' : ''
                      }`}
                    />
                    {step >= 2 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Stack</div>
                <div className="stat-number">Strong</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 9. Debt – decline
  {
    id: 9,
    maxStep: 3,
    render(step) {
      const years = ['18', '19', '20', '21', '22', '23'];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Debt</span>
            </div>
            <div className="nvda-chip">Leverage</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">DEBT</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => (
                      <div key={y} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill normal"
                            style={{
                              '--bar-target': `${44 - idx * 4}%`,
                            }}
                          />
                        </div>
                        <div className="bar-year">{y}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Trend</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  Down
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 10. Cash Flow
  {
    id: 10,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Flow</span>
            </div>
            <div className="nvda-chip">Cash</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">CASH FLOW</div>
          </div>

          <div className="nvda-row">
            {/* Op CF */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Op</div>
                <div
                  className={`stat-number ${
                    step >= 2 ? 'stat-pulse' : ''
                  }`}
                >
                  Strong
                </div>
              </div>
            </div>

            {/* FCF */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">FCF</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  Strong
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 11. Ratios – health
  {
    id: 11,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Ratios</span>
            </div>
            <div className="nvda-chip">Health</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">RATIOS</div>
          </div>

          <div className="nvda-row">
            {/* Ratio list */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">ROE</div>
                  <div className="interactive-pill">ROA</div>
                  <div className="interactive-pill">CR</div>
                  <div className="interactive-pill">D/E</div>
                </div>
              </div>
            </div>

            {/* Score */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Score</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? 'stat-pulse' : ''
                  }`}
                >
                  High
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 12. Mismatch – intrinsic vs price
  {
    id: 12,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Gap</span>
            </div>
            <div className="nvda-chip">Mismatch</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">MISMATCH</div>
          </div>

          <div className="nvda-row">
            {/* Worlds */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div
                      className={`world-layer history ${
                        step >= 1 ? 'anim-world-history' : ''
                      }`}
                    />
                    {step >= 3 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Chips */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Price</div>
                  <div className="interactive-pill">Value</div>
                  <div className="interactive-pill">Story</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 13. 2030 – final endpoint
  {
    id: 13,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>2030</span>
            </div>
            <div className="nvda-chip">End Point</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">2030</div>
          </div>

          <div className="nvda-row">
            {/* Big halo number */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal emphasis' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Rev</div>
                <div className={`halo-wrap ${step >= 2 ? 'anim-halo' : ''}`}>
                  <div className="halo-ring" />
                  <div
                    className={`stat-number ${
                      step >= 3 ? 'stat-pulse' : ''
                    }`}
                  >
                    $XXXB
                  </div>
                </div>
              </div>
            </div>

            {/* Call */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="stat-number-sub">Call</div>
                <div className="stat-number">View</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 14. Stress – risk
  {
    id: 14,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Stress</span>
            </div>
            <div className="nvda-chip">Risk</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">STRESS</div>
          </div>

          <div className="nvda-row">
            {/* Labels */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Model</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Market</div>
                </div>
              </div>
            </div>

            {/* Heat bars */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? 'glass-reveal layer-rise-delayed' : 'hidden'
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[60, 40, 35].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill hot"
                            style={{ '--bar-target': `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 15. Use – application
  {
    id: 15,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Use</span>
            </div>
            <div className="nvda-chip">Apply</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">USE</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Invest</div>
                  <div className="interactive-pill">Report</div>
                  <div className="interactive-pill">Teach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 16. Limits – guardrails
  {
    id: 16,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Limits</span>
            </div>
            <div className="nvda-chip">Guardrails</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">LIMITS</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-rise' : 'hidden'
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Model</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Macro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 17. Q&A
  {
    id: 17,
    maxStep: 1,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Q&amp;A</span>
            </div>
            <div className="nvda-chip">Discussion</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Q&amp;A</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? 'glass-reveal layer-float emphasis' : 'hidden'
                }`}
              >
                <div className="stat-number">Questions</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
];
