const SVG_NS = "http://www.w3.org/2000/svg";
const STORAGE_KEY = "amiweb-frise-rocknroll-state-v1";
const FALLBACK_CURRENT_YEAR = 2026;

const roles = [
  { id: "artiste", label: "Artiste associé", color: "#6d82ff" },
  { id: "production", label: "Production", color: "#ff1717" },
  { id: "administration", label: "Administration", color: "#ffe600" },
  { id: "direction", label: "Direction", color: "#971fa8" },
  { id: "regie", label: "Régie", color: "#55ef45" },
];

const defaultState = {
  currentYear: FALLBACK_CURRENT_YEAR,
  creationDate: "2009-09-01",
  people: [
    {
      id: "halory-goerger",
      name: "Halory Goerger",
      creations: [2010.0, 2011.5, 2013.5, 2016.4],
      periods: [{ id: "p1", role: "artiste", start: 2009.8, end: 2017.2 }],
    },
    {
      id: "julien-fournet",
      name: "Julien Fournet",
      creations: [2014.6, 2017.4, 2024.2],
      periods: [
        { id: "p1", role: "production", start: 2009.8, end: 2015.1 },
        { id: "p2", role: "artiste", start: 2015.0, end: null },
        { id: "p3", role: "direction", start: 2009.9, end: 2019.1 },
      ],
    },
    {
      id: "antoine-defoort",
      name: "Antoine Defoort",
      creations: [2013.5, 2014.6, 2016.1, 2017.3, 2019.7, 2022.5, 2025.2],
      periods: [{ id: "p1", role: "artiste", start: 2009.8, end: null }],
    },
    {
      id: "robin-mignot",
      name: "Robin Mignot",
      creations: [],
      periods: [{ id: "p1", role: "regie", start: 2009.8, end: 2019.0 }],
    },
    {
      id: "sebastien-vial",
      name: "Sebastien Vial",
      creations: [2017.4, 2023.3, 2024.7, 2026.3],
      periods: [
        { id: "p1", role: "artiste", start: 2009.8, end: null },
        { id: "p2", role: "direction", start: 2025.5, end: null },
      ],
    },
    {
      id: "eric-tartainville",
      name: "Eric Tartainville",
      creations: [],
      periods: [{ id: "p1", role: "regie", start: 2012.4, end: 2023.8 }],
    },
    {
      id: "sarah-calvez",
      name: "Sarah Calvez",
      creations: [],
      periods: [{ id: "p1", role: "administration", start: 2009.8, end: 2017.2 }],
    },
    {
      id: "mathilde-maillard",
      name: "Mathilde Maillard",
      creations: [2017.3],
      periods: [
        { id: "p1", role: "production", start: 2012.5, end: 2016.9 },
        { id: "p2", role: "artiste", start: 2016.9, end: 2019.9 },
      ],
    },
    {
      id: "pauline-foury",
      name: "Pauline Foury",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2012.5, end: 2016.1 }],
    },
    {
      id: "kevin-defrennes",
      name: "Kevin Defrennes",
      creations: [],
      periods: [{ id: "p1", role: "administration", start: 2012.5, end: 2024.3 }],
    },
    {
      id: "marion-le-guerroue",
      name: "Marion Le Guerroué",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2012.4, end: 2019.9 }],
    },
    {
      id: "samuel-hackwill",
      name: "Samuel Hackwill",
      creations: [2019.3, 2021.2, 2023.9, 2025.1],
      periods: [
        { id: "p1", role: "artiste", start: 2016.4, end: null },
        { id: "p2", role: "direction", start: 2025.6, end: null },
      ],
    },
    {
      id: "sofia-teillet",
      name: "Sofia Teillet",
      creations: [2018.5],
      periods: [{ id: "p1", role: "artiste", start: 2016.4, end: null }],
    },
    {
      id: "camille-bono",
      name: "Camille Bono",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2016.4, end: 2023.3 }],
    },
    {
      id: "margot-vouters",
      name: "Margot Vouters",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2016.4, end: 2023.3 }],
    },
    {
      id: "thomas-riou",
      name: "Thomas Riou",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2016.4, end: 2024.4 }],
    },
    {
      id: "alice-broyelle",
      name: "Alice Broyelle",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2016.4, end: 2020.8 }],
    },
    {
      id: "emanuelle-wattier",
      name: "Emanuelle Wattier",
      creations: [],
      periods: [{ id: "p1", role: "direction", start: 2018.1, end: 2021.4 }],
    },
    {
      id: "celestine-dahan",
      name: "Celestine Dahan",
      creations: [],
      periods: [{ id: "p1", role: "production", start: 2019.8, end: 2024.5 }],
    },
    {
      id: "yulia-sakun",
      name: "Yulia Sakun",
      creations: [],
      periods: [{ id: "p1", role: "administration", start: 2019.8, end: 2024.5 }],
    },
    {
      id: "basile-lemasson",
      name: "Basile Lemasson",
      creations: [],
      periods: [{ id: "p1", role: "administration", start: 2024.5, end: null }],
    },
  ],
};

const controls = {
  currentYear: document.querySelector("#currentYearInput"),
  creationDate: document.querySelector("#creationDateInput"),
  addPerson: document.querySelector("#addPersonButton"),
  reset: document.querySelector("#resetButton"),
};

const peopleEditor = document.querySelector("#peopleEditor");
const peopleCount = document.querySelector("#peopleCount");
const roleLegend = document.querySelector("#roleLegend");
const timelineMount = document.querySelector("#timelineMount");
const timelineScroll = document.querySelector("#timelineScroll");
const roleById = new Map(roles.map((role) => [role.id, role]));
let idCounter = Date.now();
let state = loadState();
const creationTooltip = el("div", "creation-tooltip");
creationTooltip.id = "creation-tooltip";
creationTooltip.setAttribute("role", "tooltip");
creationTooltip.hidden = true;
document.body.append(creationTooltip);
document.addEventListener("scroll", () => { creationTooltip.hidden = true; }, true);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") creationTooltip.hidden = true;
});
window.addEventListener("resize", () => { creationTooltip.hidden = true; });

renderStaticControls();
renderLegend();
renderPeopleEditor();
renderTimeline();

controls.currentYear.addEventListener("input", () => {
  state.currentYear = asYear(controls.currentYear.value, FALLBACK_CURRENT_YEAR);
  persistAndRenderTimeline();
});

controls.creationDate.addEventListener("input", () => {
  state.creationDate = controls.creationDate.value || defaultState.creationDate;
  persistAndRenderTimeline();
});

controls.addPerson.addEventListener("click", () => {
  const currentYear = asYear(state.currentYear, FALLBACK_CURRENT_YEAR);
  state.people.push({
    id: makeId("person"),
    name: "Nouveau peep",
    creations: [],
    periods: [
      {
        id: makeId("period"),
        role: "production",
        start: currentYear - 1,
        end: null,
      },
    ],
  });

  persistAndRenderAll();
});

controls.reset.addEventListener("click", () => {
  state = clone(defaultState);
  localStorage.removeItem(STORAGE_KEY);
  renderStaticControls();
  renderPeopleEditor();
  renderTimeline();
});

peopleEditor.addEventListener("input", (event) => {
  const target = event.target;
  const personId = target.closest("[data-person-id]")?.dataset.personId;
  const person = state.people.find((candidate) => candidate.id === personId);

  if (!person) return;

  if (target.matches("[data-field='name']")) {
    person.name = target.value;
  }

  if (target.matches("[data-field='creations']")) {
    person.creations = parseYearList(target.value);
  }

  const periodId = target.closest("[data-period-id]")?.dataset.periodId;
  const period = person.periods.find((candidate) => candidate.id === periodId);

  if (period) {
    if (target.matches("[data-field='role']")) {
      period.role = roleById.has(target.value) ? target.value : roles[0].id;
    }

    if (target.matches("[data-field='start']")) {
      period.start = asYear(target.value, period.start);
    }

    if (target.matches("[data-field='end']")) {
      period.end = target.value === "" ? null : asYear(target.value, period.end ?? state.currentYear);
    }
  }

  persistAndRenderTimeline();
});

peopleEditor.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const personId = actionButton.closest("[data-person-id]")?.dataset.personId;
  const person = state.people.find((candidate) => candidate.id === personId);

  if (!person) return;

  if (actionButton.dataset.action === "remove-person") {
    state.people = state.people.filter((candidate) => candidate.id !== person.id);
  }

  if (actionButton.dataset.action === "add-period") {
    person.periods.push({
      id: makeId("period"),
      role: "production",
      start: Math.max(getCreationYear(), state.currentYear - 1),
      end: null,
    });
  }

  if (actionButton.dataset.action === "remove-period") {
    const periodId = actionButton.closest("[data-period-id]")?.dataset.periodId;
    person.periods = person.periods.filter((candidate) => candidate.id !== periodId);
  }

  persistAndRenderAll();
});

function renderStaticControls() {
  controls.currentYear.value = state.currentYear;
  controls.creationDate.value = state.creationDate;
}

function renderLegend() {
  roleLegend.replaceChildren();

  for (const role of roles) {
    const item = el("span", "legend-item");
    const swatch = el("span", "legend-swatch");

    swatch.style.background = role.color;
    item.append(text(role.label), swatch);
    roleLegend.append(item);
  }

  const creationItem = el("span", "legend-item");
  creationItem.append(text("(création)"), createLegendStar());
  roleLegend.append(creationItem);
}

function renderPeopleEditor() {
  peopleCount.textContent = String(state.people.length);
  peopleEditor.replaceChildren(...state.people.map(createPersonEditor));
}

function createPersonEditor(person) {
  const wrapper = el("article", "person-editor");
  wrapper.dataset.personId = person.id;

  const head = el("div", "person-head");
  const nameInput = createInput({
    value: person.name,
    label: "Nom",
    className: "person-name-field",
    field: "name",
  });
  const removeButton = createButton("×", "Supprimer ce peep", "icon-button danger");

  removeButton.dataset.action = "remove-person";
  head.append(nameInput, removeButton);

  const periodList = el("div", "period-list");
  periodList.append(...person.periods.map((period) => createPeriodEditor(period)));

  const creationControl = labelWrap("Créations", "control creation-control");
  const creationInput = createBareInput("text", formatYearList(person.creations));
  creationInput.dataset.field = "creations";
  creationInput.inputMode = "decimal";
  creationInput.placeholder = "2014.5, 2017, 2024.25";
  creationControl.append(creationInput);

  const addPeriodButton = createButton("+ Période", "Ajouter une période", "add-period-button");
  addPeriodButton.dataset.action = "add-period";

  const actions = el("div", "person-actions");
  actions.append(addPeriodButton);

  wrapper.append(head, periodList, creationControl, actions);
  return wrapper;
}

function createPeriodEditor(period) {
  const row = el("div", "period-row");
  row.dataset.periodId = period.id;

  const roleLabel = labelWrap("Rôle");
  const roleSelect = document.createElement("select");
  roleSelect.dataset.field = "role";

  for (const role of roles) {
    const option = document.createElement("option");
    option.value = role.id;
    option.textContent = role.label;
    option.selected = role.id === period.role;
    roleSelect.append(option);
  }

  roleLabel.append(roleSelect);

  const startLabel = labelWrap("Début");
  const startInput = createBareInput("number", formatYear(period.start));
  startInput.dataset.field = "start";
  startInput.min = "1990";
  startInput.max = "2100";
  startInput.step = "0.25";
  startLabel.append(startInput);

  const endLabel = labelWrap("Fin");
  const endInput = createBareInput("number", period.end === null ? "" : formatYear(period.end));
  endInput.dataset.field = "end";
  endInput.min = "1990";
  endInput.max = "2100";
  endInput.step = "0.25";
  endInput.placeholder = "auj.";
  endLabel.append(endInput);

  const removeButton = createButton("×", "Supprimer cette période", "icon-button danger");
  removeButton.dataset.action = "remove-period";

  row.append(roleLabel, startLabel, endLabel, removeButton);
  return row;
}

function renderTimeline() {
  creationTooltip.hidden = true;
  peopleCount.textContent = String(state.people.length);
  timelineMount.replaceChildren();

  if (state.people.length === 0) {
    const empty = el("div", "empty-state");
    empty.textContent = "Aucun peep";
    timelineMount.append(empty);
    return;
  }

  const chart = createChartMetrics();
  const svg = createSvg("svg", {
    class: "timeline-svg",
    width: chart.width,
    height: chart.height,
    viewBox: `0 0 ${chart.width} ${chart.height}`,
    role: "img",
    "aria-label": "Frise des rôles de L'Amicale",
  });

  const defs = createSvg("defs");
  const shadow = createSvg("filter", {
    id: "marker-shadow",
    x: "-30%",
    y: "-30%",
    width: "160%",
    height: "160%",
  });
  shadow.append(
    createSvg("feDropShadow", {
      dx: "0",
      dy: "1.8",
      stdDeviation: "1.5",
      "flood-color": "#000000",
      "flood-opacity": "0.5",
    }),
  );
  defs.append(shadow);
  svg.append(defs);

  drawGrid(svg, chart);
  drawPeople(svg, chart);
  setupTimelineHover(svg, chart);

  timelineMount.append(svg);
}

function drawGrid(svg, chart) {
  const gridGroup = createSvg("g");

  for (const year of chart.ticks) {
    const x = xForYear(year, chart);
    const isToday = year === chart.currentYear;
    const shouldShowYearLabel = isToday || Math.abs(year - chart.currentYear) >= chart.minLabelGapYears;
    gridGroup.append(
      createSvg("line", {
        x1: x,
        x2: x,
        y1: chart.axisTop,
        y2: chart.height - 30,
        stroke: isToday ? "#f2f2ee" : "var(--grid)",
        "stroke-width": isToday ? 2.5 : 2,
        opacity: isToday ? 0.95 : 0.75,
      }),
    );

    if (!shouldShowYearLabel) continue;

    const label = createSvg("text", {
      x,
      y: chart.axisTop - 12,
      class: `svg-year${isToday ? " svg-today" : ""}`,
      "text-anchor": isToday ? "end" : "middle",
    });
    label.textContent = isToday ? "aujourd'hui" : String(year);
    gridGroup.append(label);
  }

  svg.append(gridGroup);
}

function drawPeople(svg, chart) {
  const peopleGroup = createSvg("g");
  const orderedPeople = state.people
    .map((person, personIndex) => ({
      person,
      personIndex,
      start: Math.min(...normalizedPeriods(person).map((period) => period.start)),
    }))
    .sort((a, b) => a.start - b.start || a.personIndex - b.personIndex);

  orderedPeople.forEach(({ person, personIndex }, rowIndex) => {
    const personGroup = createSvg("g", { "data-person-index": personIndex });
    const y = chart.rowTop + rowIndex * chart.rowHeight;
    const label = createSvg("text", {
      x: chart.left - 24,
      y: y + 5,
      class: "svg-name",
      "text-anchor": "end",
      fill: labelColorForPerson(person),
    });

    label.textContent = person.name || "Sans nom";
    personGroup.append(label);

    drawPeriods(personGroup, person, y, chart);
    drawCreationMarkers(personGroup, person, y, chart);
    peopleGroup.append(personGroup);
  });

  svg.append(peopleGroup);
}

function setupTimelineHover(svg, chart) {
  const rows = [...svg.querySelectorAll("[data-person-index]")].map((node) => ({
    node,
    periods: normalizedPeriods(state.people[Number(node.dataset.personIndex)])
      .map((period) => ({ start: period.start, end: period.end ?? chart.currentYear }))
      .filter((period) => period.end > period.start),
  }));
  let hoveredRow = null;
  const reset = () => {
    hoveredRow = null;
    rows.forEach(({ node }) => node.classList.remove("is-inactive"));
  };

  svg.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || !event.target.closest(".person-period, .svg-name")) {
      reset();
      return;
    }
    const targetRow = event.target.closest("[data-person-index]");
    if (targetRow === hoveredRow) return;
    const selected = rows.find(({ node }) => node === targetRow);
    if (!selected) return;
    hoveredRow = targetRow;

    rows.forEach(({ node, periods }) => {
      const overlaps = periods.some((period) => selected.periods.some((other) =>
        period.start < other.end && other.start < period.end,
      ));
      node.classList.toggle("is-inactive", node !== targetRow && !overlaps);
    });
  });
  svg.addEventListener("pointerleave", reset);
  svg.addEventListener("pointercancel", reset);
}

function drawPeriods(group, person, y, chart) {
  const periods = normalizedPeriods(person)
    .map((period) => ({
      ...period,
      start: clamp(period.start, chart.startYear, chart.endYear),
      end: clamp(period.end ?? chart.currentYear, chart.startYear, chart.endYear),
    }))
    .filter((period) => period.end > period.start);
  if (periods.length === 0) return;

  const boundaries = [...new Set(periods.flatMap((period) => [period.start, period.end]))]
    .sort((a, b) => a - b);
  const path = createRockLinePath(
    xForYear(boundaries[0], chart),
    xForYear(boundaries.at(-1), chart),
    y,
    person.id,
  );

  // Clip a shared curve at role changes so overlapping strokes stay concentric.
  boundaries.slice(0, -1).forEach((start, segmentIndex) => {
    const end = boundaries[segmentIndex + 1];
    const active = periods.filter((period) => period.start < end && period.end > start);
    if (active.length === 0) return;

    const clipId = `period-clip-${y}-${segmentIndex}`;
    const clip = createSvg("clipPath", { id: clipId });
    clip.append(createSvg("rect", {
      x: xForYear(start, chart),
      y: y - chart.rowHeight / 2,
      width: xForYear(end, chart) - xForYear(start, chart),
      height: chart.rowHeight,
    }));
    group.append(clip);

    active.forEach((period, index) => {
      const role = roleById.get(period.role) ?? roles[0];
      group.append(createSvg("path", {
        d: path,
        class: "person-period",
        "clip-path": `url(#${clipId})`,
        fill: "none",
        stroke: role.color,
        "stroke-width": Math.max(2, 24 - index * 8),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }));
    });
  });
}

function drawCreationMarkers(group, person, y, chart) {
  person.creations
    .filter((year) => Number.isFinite(year) && year >= chart.startYear && year <= chart.endYear)
    .forEach((year, index) => {
      const x = xForYear(year, chart);
      const rotation = -18 + seededNumber(`${person.id}-creation-${index}`) * 36;

      const marker = createSvg("path", {
          d: starPath(x, y, 15, 6.4, 6, rotation),
          class: "creation-marker",
          tabindex: "0",
          "aria-label": `Projet ${index + 1}`,
          "aria-describedby": "creation-tooltip",
          fill: "#7890ff",
          stroke: "#0b0b0b",
          "stroke-width": 4,
          "stroke-linejoin": "round",
          filter: "url(#marker-shadow)",
        });
      const showTooltip = () => {
        const title = el("strong");
        title.textContent = `Projet ${index + 1}`;
        const date = el("span");
        const wholeYear = Math.floor(year);
        const start = Date.UTC(wholeYear, 0, 1);
        const end = Date.UTC(wholeYear + 1, 0, 1);
        const formattedDate = Number.isInteger(year) ? String(year) :
          new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" })
            .format(new Date(start + (year - wholeYear) * (end - start)));
        date.textContent = `Création : ${formattedDate}`;
        creationTooltip.replaceChildren(title, date);
        creationTooltip.hidden = false;
        const bounds = marker.getBoundingClientRect();
        const tooltipBounds = creationTooltip.getBoundingClientRect();
        creationTooltip.style.left = `${clamp(bounds.x + bounds.width / 2 - tooltipBounds.width / 2, 8, window.innerWidth - tooltipBounds.width - 8)}px`;
        const top = bounds.top - tooltipBounds.height - 10;
        creationTooltip.style.top = `${clamp(top >= 8 ? top : bounds.bottom + 10, 8, window.innerHeight - tooltipBounds.height - 8)}px`;
      };
      marker.addEventListener("pointerenter", showTooltip);
      marker.addEventListener("focus", showTooltip);
      marker.addEventListener("pointerleave", () => { creationTooltip.hidden = true; });
      marker.addEventListener("blur", () => { creationTooltip.hidden = true; });
      group.append(marker);
    });
}

function createChartMetrics() {
  const currentYear = asYear(state.currentYear, FALLBACK_CURRENT_YEAR);
  const rawYears = [currentYear, getCreationYear()];

  for (const person of state.people) {
    for (const period of person.periods) {
      rawYears.push(asYear(period.start, currentYear));
      rawYears.push(period.end === null ? currentYear : asYear(period.end, currentYear));
    }

    rawYears.push(...person.creations.filter(Number.isFinite));
  }

  const minYear = Math.min(...rawYears);
  const maxYear = Math.max(...rawYears, currentYear);
  const startYear = Math.floor(minYear);
  const endYear = Math.ceil(Math.max(maxYear, startYear + 3));
  const left = 180;
  const right = 36;
  const yearWidth = 44;
  const axisTop = 70;
  const rowTop = 120;
  const rowHeight = 36;
  const height = rowTop + state.people.length * rowHeight + 38;
  const width = left + (endYear - startYear) * yearWidth + right;
  const ticks = [];

  for (let year = Math.ceil(startYear / 5) * 5; year <= endYear; year += 5) {
    ticks.push(year);
  }

  if (!ticks.includes(currentYear)) {
    ticks.push(currentYear);
    ticks.sort((a, b) => a - b);
  }

  return {
    currentYear,
    startYear,
    endYear,
    left,
    right,
    yearWidth,
    axisTop,
    rowTop,
    rowHeight,
    width,
    height,
    ticks,
    minLabelGapYears: 2.2,
  };
}

function createRockLinePath(x1, x2, y, seed) {
  const length = x2 - x1;
  const bendA = (seededNumber(`${seed}-a`) - 0.5) * 7;
  const bendB = (seededNumber(`${seed}-b`) - 0.5) * 7;
  const endBend = (seededNumber(`${seed}-c`) - 0.5) * 2.8;

  if (length < 70) {
    return `M ${x1.toFixed(2)} ${y.toFixed(2)} C ${(x1 + length * 0.38).toFixed(2)} ${(y + bendA).toFixed(2)} ${(x1 + length * 0.62).toFixed(2)} ${(y + bendB).toFixed(2)} ${x2.toFixed(2)} ${(y + endBend).toFixed(2)}`;
  }

  const mid = x1 + length * (0.48 + (seededNumber(`${seed}-m`) - 0.5) * 0.08);

  return [
    `M ${x1.toFixed(2)} ${y.toFixed(2)}`,
    `C ${(x1 + length * 0.24).toFixed(2)} ${(y + bendA).toFixed(2)} ${(mid - length * 0.16).toFixed(2)} ${(y - bendB).toFixed(2)} ${mid.toFixed(2)} ${(y + bendB * 0.55).toFixed(2)}`,
    `C ${(mid + length * 0.16).toFixed(2)} ${(y + bendA).toFixed(2)} ${(x2 - length * 0.24).toFixed(2)} ${(y - bendB).toFixed(2)} ${x2.toFixed(2)} ${(y + endBend).toFixed(2)}`,
  ].join(" ");
}

function createLegendStar() {
  const svg = createSvg("svg", {
    class: "legend-star",
    viewBox: "0 0 36 30",
    "aria-hidden": "true",
    focusable: "false",
  });

  svg.append(
    createSvg("path", {
      d: starPath(18, 15, 15, 6, 6, -20),
      fill: "var(--creation)",
      stroke: "#0b0b0b",
      "stroke-width": 3.5,
      "stroke-linejoin": "round",
    }),
  );

  return svg;
}

function starPath(cx, cy, outerRadius, innerRadius, points, rotation = 0) {
  const commands = [];
  const steps = points * 2;
  const offset = (-90 + rotation) * (Math.PI / 180);

  for (let index = 0; index < steps; index += 1) {
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const angle = offset + (index / steps) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    commands.push(`${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  commands.push("Z");
  return commands.join(" ");
}

function xForYear(year, chart) {
  return chart.left + (year - chart.startYear) * chart.yearWidth;
}

function normalizedPeriods(person) {
  return [...person.periods]
    .filter((period) => Number.isFinite(period.start))
    .sort((a, b) => a.start - b.start);
}

function labelColorForPerson(person) {
  const current = asYear(state.currentYear, FALLBACK_CURRENT_YEAR);
  const active = person.periods.find((period) => {
    const end = period.end === null ? current : period.end;
    return period.start <= current && end >= current;
  });
  const role = active ? roleById.get(active.role) : null;

  return role ? role.color : "var(--text)";
}

function getCreationYear() {
  const date = new Date(`${state.creationDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return 2009.67;
  }

  const start = new Date(date.getFullYear(), 0, 1);
  const next = new Date(date.getFullYear() + 1, 0, 1);
  const amount = (date - start) / (next - start);

  return date.getFullYear() + amount;
}

function parseYearList(value) {
  return (value.match(/\d{4}(?:[.,]\d+)?/g) ?? [])
    .map((part) => Number(part.replace(",", ".")))
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
}

function formatYearList(years) {
  return years.map(formatYear).join(", ");
}

function formatYear(year) {
  if (!Number.isFinite(year)) return "";
  return Number.isInteger(year) ? String(year) : String(Number(year.toFixed(2)));
}

function asYear(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function persistAndRenderTimeline() {
  saveState();
  renderTimeline();
}

function persistAndRenderAll() {
  saveState();
  renderPeopleEditor();
  renderTimeline();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : clone(defaultState);
    return normalizeState(parsed);
  } catch {
    return clone(defaultState);
  }
}

function normalizeState(candidate) {
  const currentYear = asYear(candidate.currentYear, FALLBACK_CURRENT_YEAR);
  const creationDate = /^\d{4}-\d{2}-\d{2}$/.test(candidate.creationDate)
    ? candidate.creationDate
    : defaultState.creationDate;
  const people = Array.isArray(candidate.people) ? candidate.people : [];

  return {
    currentYear,
    creationDate,
    people: people.map((person, personIndex) => ({
      id: person.id || makeId(`person-${personIndex}`),
      name: typeof person.name === "string" ? person.name : "Sans nom",
      creations: Array.isArray(person.creations) ? person.creations.map(Number).filter(Number.isFinite) : [],
      periods: normalizePeriods(person.periods),
    })),
  };
}

function normalizePeriods(periods) {
  if (!Array.isArray(periods) || periods.length === 0) return [];

  return periods.map((period, index) => {
    const role = roleById.has(period.role) ? period.role : roles[0].id;
    const start = asYear(period.start, FALLBACK_CURRENT_YEAR - 1);
    const end = period.end === null || period.end === "" ? null : asYear(period.end, start + 1);

    return {
      id: period.id || makeId(`period-${index}`),
      role,
      start,
      end,
    };
  });
}

function seededNumber(input) {
  let hash = 2166136261;
  const value = String(input);

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0) / 4294967295;
}

function makeId(prefix) {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

function createInput({ value, label, className, field }) {
  const input = createBareInput("text", value);
  input.setAttribute("aria-label", label);
  input.className = className;
  input.dataset.field = field;
  return input;
}

function createBareInput(type, value) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  return input;
}

function createButton(label, ariaLabel, className = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.setAttribute("aria-label", ariaLabel);
  button.textContent = label;
  return button;
}

function labelWrap(label, className = "") {
  const wrapper = document.createElement("label");
  wrapper.className = className;
  const textNode = document.createElement("span");
  textNode.textContent = label;
  wrapper.append(textNode);
  return wrapper;
}

function text(value) {
  return document.createTextNode(value);
}

function el(tag, className = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function createSvg(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);

  for (const [name, value] of Object.entries(attrs)) {
    node.setAttribute(name, value);
  }

  return node;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
